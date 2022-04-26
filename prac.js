function mult(callback , val) {

callback();


}

mult(()=>{
    console.log('callback');
} , 5)


// ES6
const multi = () => {
  return 5 * 6;
};

const obj = {
  mul: function call() {
    console.log('Vinay');
  },
};
console.log(obj);
console.log(multi());
obj.mul();

async function executeafter() {
  return new Promise((res, rej) => {
res('c');
  });
}

executeafter().then(d => console.log(d));

// JSON

const o = {
  skill: [''],
  sub: {
    marks: {sds: ['10', '20']},
  },
};

console.log(o.sub.marks.sds);


