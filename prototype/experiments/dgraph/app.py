# app.py
from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Initial graph data
graph_data = {
    "nodes": [],
    "edges": []
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_graph', methods=['GET'])
def get_graph():
    return jsonify(graph_data)

@app.route('/add_node', methods=['POST'])
def add_node():
    data = request.get_json()
    x = data.get('x', 0)
    y = data.get('y', 0)
    label = data.get('label', f"Node {len(graph_data['nodes']) + 1}")
    
    new_node = {
        "id": len(graph_data['nodes']) + 1,
        "label": label,
        "x": x,
        "y": y
    }
    graph_data['nodes'].append(new_node)
    return jsonify({"success": True, "node": new_node})

@app.route('/add_edge', methods=['POST'])
def add_edge():
    data = request.get_json()
    from_id = data.get('from')
    to_id = data.get('to')
    
    new_edge = {
        "from": from_id,
        "to": to_id
    }
    graph_data['edges'].append(new_edge)
    return jsonify({"success": True, "edge": new_edge})

@app.route('/update_node', methods=['POST'])
def update_node():
    data = request.get_json()
    node_id = data.get('id')
    label = data.get('label')
    
    for node in graph_data['nodes']:
        if node['id'] == node_id:
            node['label'] = label
            break
    return jsonify({"success": True})

if __name__ == '__main__':
    app.run(debug=True)
