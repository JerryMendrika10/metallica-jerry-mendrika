import React, { Component } from 'react';
import request from "request";

class DataService extends Component {
    static getDatas(url) {
        return new Promise((resolve, reject) => {
          request(
            {
              uri: `${url}`,
              method: "GET"
            },
            (error, _res, response) => {
              if (!error) {
                try {
                  console.log('RES', response)
                  //const body = JSON.parse(response);
                  resolve(JSON.parse(response));
                } catch (Exception) {
                  console.log('GET DATA EXCEPTION', Exception)
                  resolve({})
                }
              } else {
                reject(`Unable to send message: ${error}`);
              }
            }
          );
        });
      }
}

export default DataService;