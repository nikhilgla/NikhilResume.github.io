console.log('Hello, World!');

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success with 1');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success with 2');
    }, 4000);
});

 function trypromise() {
    return "Success with 3";
}

async function handle() {

    console.log('Start');

    const result1 = await p1;
    console.log(result1);

    const result2 = await p2;
    console.log(result2);

    const result3 = trypromise();
    console.log(result3);
    
    
}

handle();