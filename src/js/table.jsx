import React from 'react';
import ReactDOM from 'react-dom';

import util from './util'
import mixin from './mixin'
import { temp_map, Temp } from './temp'

/**
* @description factory RNT
* @constructor
* @param {Object} config like {type: 'usual'}
* @param {Function|undefined} callback
* @return {RNT}
* @example 
*  new RNT({type: 'usual'}, function(RNT, el, data){
*     console.log(RNT, el, data);
*  })
*/
class RNT extends React.component{

	constructor ( ...params ){

		const version = util.version;
		const __param__ = {
			type: 'usual',
			grow: false,
			ignore: false
		};

		if( params.length < 2 ){
			if( typeof params[0] !== 'object' ){
				return ;
			}else{
				this.config = params[0];
				if( typeof params[1] === 'function' ){
					this.callback = params[1]
				}else{
					throw new Error('param error');
				}
			}

		}

		this.mixin = mixin;
		this['object'] = params[0];
		this['callback'] = params[1];
	}
}

export default RNT;