var start_date = new Date('');
var end_date = new Date(start_date.toString());
console.log(end_date)
let  i = 0;
var weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
var set = new Set(['Mon','Tue'])
var time = ['2:21','4:21']
if(start_date.getUTCDate() < start_date.getDate()){

start_date.setDate(start_date.getDate()+1);
console.log(start_date.toISOString())

}
// while(start_date < end_date){

//     var now = start_date;
//    // var start_date = new Date();
//   //  console.log(start_date.getDate())
//       //  now.setDate(start_date.getDate());
//         now.setMonth(start_date.getMonth())
       
//    //     console.log(now , ' curr date')
//        // console.log(weeks[now.getDay()])
//         if(set.has(weeks[now.getDay()])){
            
//                time.forEach(ti=>{
//               //  console.log(ti.split(":"))
//                 let timm = ti.split(":");
//                 now.setHours(timm[0]);
//                 now.setMinutes(timm[1]);
//             //   console.log(new Date(Date.now()));
//              //  console.log(Date.parse(now));
//                console.log('now', start_date.toISOString());
             
//                console.log('now', now.getTime());
//                console.log(now.getDate(),now.getDay(), now.getHours(),now.getMinutes(), now.getTime(),now.getDay());

//                console.log('now', now.getTime());
//             console.log('---------------')
//                })
//         }
//         start_date.setDate(start_date.getDate()+1)
        
// }