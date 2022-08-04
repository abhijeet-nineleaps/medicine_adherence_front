import React from 'react';
import { Linking, Share, View} from 'react-native';
import SettingsList from 'react-native-settings-list';
import styles from "./screenStyles/SettingStyles";


interface Props {
  navigation: any;
}

const Settings: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <SettingsList borderColor="white" backgroundColor="white">
        <SettingsList.Header
          headerText="Settings"
          headerStyle={styles.setting}
          testId='settings'
        />
        <SettingsList.Item
          hasNavArrow={true}
          title="Notification settings"
          titleStyle={styles.settingItems}
          onPress={() => Linking.openSettings()}
          testId='openSettings'
        />

        <SettingsList.Header
          headerText="General"
          headerStyle={styles.general}
        />
        <SettingsList.Item
          hasNavArrow={false}
          title="About Medstick"
          titleStyle={styles.settingItems}
          onPress={() => navigation.navigate('aboutApp')}
          testId='aboutApp'
        />
        <SettingsList.Item
          hasNavArrow={false}
          title="Share with friends and family"
          titleStyle={styles.settingItems}
          onPress={async () => {
            try {
              await Share.share({
                title: 'Medstick',
                message:
                  'Hello you are invited to use Medstick ' +
                  'https://play.google.com/store/apps/details?id=com.animesafar.dinterviewkit',
                url: 'https://cdn.discordapp.com/attachments/941592669933682699/955175698568462437/vinaylogo.png',
              });
            } catch (error) {}
          }}
        />
      </SettingsList>
    </View>
  );
};

export default Settings;

