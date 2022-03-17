import React, { useEffect } from 'react';
import { Alert, View, Text } from 'react-native';
import { Button, CheckBox, Input } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InteractiveTextInput from "react-native-text-input-interactive";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import SQLite from 'react-native-sqlite-2';
import { time_data, day_data } from './Timedata';


const Reminder = ({ navigation }) => {

    const [picker, pickerstate] = React.useState(false)
    const [selectedItems, slectedstate] = React.useState([]);
    const [selecteddaysItems, slecteddaysstate] = React.useState([]);
    const [load, loadstate] = React.useState(false);
    const [start_date, start_datestate] = React.useState('Start Date');
    const [end_date, end_datestate] = React.useState('End Date');
    const [bottomsheet, bottomsheetstate] = React.useState(true);
    const [check1, setCheck1] = React.useState(false);
    const [check2, setCheck2] = React.useState(false);
    const [title, titlestate] = React.useState('');

    const onSelectedItemsChange = (selectedi) => {
        console.log(selectedi.id)
        slectedstate(selectedi)
    }
    const onSelecteddaysItemsChange = (selectedi) => {

        slecteddaysstate(selectedi)
    }
    const hideDatePicker = () => {
        pickerstate(false);
    };
    const titlechange = (txt) => {
        titlestate(txt)
    }
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        start_datestate(start_date + " : " + date)
        hideDatePicker();
    };

    const savereminder = () => {
        loadstate(true)
        let time = '';
        let days = '';
        if (check2) {

            for (let i = 0; i < selectedItems.length; i++) {
                time += selectedItems[i] + ':';
            }
            for (let i = 0; i < selecteddaysItems.length; i++) {
                days += selecteddaysItems[i] + ':';
            }
            console.log(time, days)

        }

        const db = SQLite.openDatabase('test.db', '1.0', '', 1)
        db.transaction(function (txn) {
            txn.executeSql('CREATE TABLE IF NOT EXISTS reminders(rem_id INTEGER PRIMARY KEY NOT NULL, title VARCHAR(230), time VARCHAR(200) , days VARCHAR(200) , start_date VARCHAR(50))', []);

            txn.executeSql('INSERT INTO reminders (title,time,days,start_date) VALUES (:title,:time,:days,:start_date)', [title, time, days, start_date]);

            txn.executeSql('SELECT * FROM `reminders`', [], function (tx, res) {
                for (let i = 0; i < res.rows.length; ++i) {
                    console.log('item:', res.rows.item(i));
                }
                loadstate(false)
            });

        })

        console.log(selectedItems, selecteddaysItems)

    }



    return (
        <View style={{ height: '100%', backgroundColor: 'white' }}>


            <View style={{ height: '100%' }}>
                <Button buttonStyle={{ backgroundColor: '#3743ab' }} containerStyle={{ width: '50%', margin: 20, alignItems: 'center' }} title="Select Dates" onPress={() => pickerstate(true)}></Button>
                <Text style={{ fontSize: 22, margin: 12 }}>{start_date}</Text>

                <DateTimePickerModal
                    isVisible={picker}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <InteractiveTextInput mainColor="black" placeholder="Title"
                    style={{ borderColor: 'black', position: 'absolute', justifyContent: 'center' }}
                    onChangeText={titlechange}></InteractiveTextInput>
                <Divider width={1}></Divider>
                <SectionedMultiSelect IconRenderer={Icon}
                    items={time_data}
                    uniqueKey="id"
                    expandDropDowns={true}
                    subKey="children"
                    selectText="Choose timings"
                    highlightChildren={true}
                    showDropDowns={true}
                    readOnlyHeadings={true}
                    hideSearch={true}
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}></SectionedMultiSelect>
                <Divider width={1}></Divider>
                <View style={{ padding: 10, margin: 8 }}>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 16 }}>Select Dates</Text>
                    </TouchableOpacity>
                    <CheckBox center
                        title="Everyday"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check1}
                        onPress={() => {
                            setCheck1(!check1)
                            setCheck2(false)
                        }}></CheckBox>

                    <CheckBox center
                        title="Selected days of week"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check2}
                        onPress={() => {
                            setCheck2(!check2)
                            setCheck1(false)
                        }}></CheckBox>
                    {
                        check2 && <SectionedMultiSelect IconRenderer={Icon}
                            items={day_data}
                            uniqueKey="id"
                            hideSearch={true}
                            subKey="children"
                            selectText="Choose days"
                            showDropDowns={true}
                            expandDropDowns={true}

                            readOnlyHeadings={true}
                            onSelectedItemsChange={onSelecteddaysItemsChange}
                            selectedItems={selecteddaysItems}></SectionedMultiSelect>
                    }
                </View>
                <Button loading={load} title="Save reminder" onPress={savereminder} buttonStyle={{ backgroundColor: '#3743ab', width: '50%', margin: 10 }} containerStyle={{ alignItems: 'center' }}></Button>

            </View>
        </View>
    )

}

export default Reminder;