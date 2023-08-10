/* eslint-disable @typescript-eslint/no-var-requires */
const cluster = require('cluster');
import { Injectable } from '@nestjs/common';
import * as os from 'os';

const numCPUs = os.cpus().length;
const PORT = process.env.PORT;

@Injectable()
export class ClusterService {
  static clusterize(callback: () => void): void {
    if (cluster.isPrimary) {
      console.log(
        `\x1b[36m ==> PORT: ${PORT} - PRIMARY [${process.pid}] <==\x1b[0m`,
      );
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }
      cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died`);
      });
    } else {
      console.log(`\x1b[33m ==> CLUSTER START ON ${process.pid} <==\x1b[0m`);
      callback();
    }
  }
}
