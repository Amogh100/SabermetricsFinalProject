
export let roundNumberFieldToThird = function(objects, field){
    objects.map(function(object){
        object[field] = object[field].toFixed(3);
        return object;
    });
}

export let cleanName = function(objects, nameField){
    objects.map(function(object){
        let name = object[nameField];
        let newName = name.charAt(0).toUpperCase() + name.slice(1);
        object[nameField] = newName;
        return object;
    });
}

export let addKeyField = function(objects){
    for(var i = 0; i < objects.length; i++){
        objects[i].key = i;
    }
    return objects;
}
