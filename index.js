/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require(`axios`);
const moment = require(`moment`);
const MODE = process.env.MODE;

const NUM = 8;

const callAPI = (index, port, momentInstance) => {
  axios.get(`http://localhost:${port}`).then(({ data }) => {
    // console.log(`==> [${port}] ${momentInstance.format('h:mm:ss.SSS')} DATA[${index}] =`, data);
    if (index === NUM)
      console.log(`==> END [${port}]: ${moment().diff(momentInstance)}ms <==`);
  });
};

const main = async () => {
  const start3001 = moment();
  console.log(`==> START [3001]:  ${start3001} <==`);
  for (let i = 1; i <= NUM; i += 1) {
    callAPI(i, 3001, start3001);
  }

  if (MODE === 'dual') {
    const start3002 = moment();
    console.log(`==> START [3002]:  ${start3002} <==`);
    for (let i = 1; i <= NUM; i += 1) {
      callAPI(i, 3002, start3002);
    }
  }
};

main();
