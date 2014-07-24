var parse = function(str) {

    var links = {};

    var nodes = JSON.parse(str);

    var iter = function(nodes, parentNode) {
        console.log([nodes, parentNode]);
        for(var i = 0; i < nodes.length; i++) {
            nodes[i].parentNode = parentNode;
            links[nodes[i].id] = nodes[i];
            iter(nodes[i].childNodes, nodes[i]);
        }
    };
    iter(nodes, null);

    return {
        getElementById: function(id) {
            return links[id];
        }
    };
}

var json = require('fs').readFileSync('nodes.json');
var tree = parse(json);
