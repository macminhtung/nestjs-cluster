## Installation
```bash
$ yarn install
```

## Running the app
```bash
$ yarn start:1
$ yarn start:2
```

## Test performance
```bash
# Check performance when running a single app
$ MODE=single node index.js
# Check performance when running dual app
$ MODE=dual node index.js
```

## RESULT
Model Name:	iMac
Model Identifier:	iMac21,2
Chip:	Apple M1
Total Number of Cores:	8 (4 performance and 4 efficiency)
Memory:	8 GB

```bash
$ MODE=single node index.js
$ ==> START [3001]:  Thu Aug 10 2023 15:23:05 GMT+0700 <==
$ ==> END [3001]: 5441ms <==

$ MODE=double node index.js
$ ==> START [3001]:  Thu Aug 10 2023 15:23:27 GMT+0700 <==
$ ==> START [3002]:  Thu Aug 10 2023 15:23:27 GMT+0700 <==
$ ==> END [3001]: 12176ms <==
$ ==> END [3002]: 12231ms <==
```
