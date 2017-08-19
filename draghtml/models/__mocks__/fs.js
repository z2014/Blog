'use strict';

const path = require('path');

const fs = jest.genMockFromModule('fs');

function __createTxt(txt) {
	return {
		richText: {
			html: txt
		}
	}
}

fs.__createTxt = __createTxt;

module.exports = fs;