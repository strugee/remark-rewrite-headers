/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

var visit = require('unist-util-visit');

function rewrite(ast, file, next) {
	visit(ast, 'heading', function(node) {
		// TODO: should we refuse if the depth is 6?
		node.depth += 1;
	});

	next();
};

module.exports = function(remark, options) {
	return rewrite;
};
