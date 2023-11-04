const db = require('./connection');

let querys = {
    getproducto: 'SELECT * FROM producto',
    getproductoID: 'SELECT * FROM producto WHERE id = ?',
    insertproducto: 'INSERT INTO producto (code, name, brand, model, description, price, category_id) VALUES(?, ?, ?, ?, ?, ?, ?)',
    getimagen: 'SELECT * FROM imagen',
    getcategory: 'SELECT * FROM category',
    insertimagen: 'INSERT INTO imagen (url, producto_id, destacado) VALUES(?, ?, ?)',
    insertcategory: 'INSERT INTO category(category_id, name, id) VALUES(?, ?)',
    updateproducto: 'UPDATE producto SET code = ?, name = ?, brand = ?, model = ?, description = ?, price = ?, category_id = ? WHERE id = ?',
    updateimagen: 'UPDATE imagen SET url = ?, producto_id = ?, destacado = ? WHERE id = ?',
    updatecategory: 'UPDATE category SET category_id = ?, name = ? WHERE id = ?',
    deleteproducto: 'DELETE FROM producto WHERE id = ?',
    deleteimagen: 'DELETE FROM imagen WHERE id = ?',
    deletecategory: 'DELETE FROM category WHERE id = ?'
}
module.exports = {
    getproducto(){
        return new Promise((resolve, reject)=>{
            db.all(querys.getproducto, (err,rows)=>{
                if(err) reject(err);
                resolve(rows);
            })
        })

    
    },
    
    insertproducto(code, name, brand, model, description, price, category_id){
        return new Promise((resolve, reject) => {
            db.run(querys.insertproducto, [code, name, brand, model, description, price, category_id], (err) => {
                if(err) reject(err);
                    resolve()
            })
        })
    
    },

    getproductoID(id){
        return new Promise((resolve, reject)=>{
            db.all(querys.getproductoID, [id], (err,rows)=>{
                if(err) reject(err);
                resolve(rows);
            })
        })
    },

    updateproducto(id, code, name, brand, model, description, price, category_id){
        return new Promise((resolve, reject) => {
            db.run(querys.updateproducto, [code, name, brand, model, description, price, category_id, id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },

    deleteproducto(id){
        return new Promise((resolve, reject) => {
            db.run(querys.deleteproducto, [id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },
    getimagen(){
        return new Promise((resolve, reject) => {
            db.all(querys.getimagen, (err, rows) => {
                if(err) reject(err);
                resolve(rows);
            })
        })
    },


    getimagen(id){
        return new Promise((resolve, reject) => {
            db.all(querys.getimagen, [id], (err, rows) => {
                if(err) reject(err);
                resolve(rows);
            })
        })
    },

    insertimagen(url, producto_id, destacado){
        return new Promise((resolve, reject) => {
            db.all(querys.insertimagen, [url, producto_id, destacado], (err) => {
                if(err) reject(err);
                resolve(rows);
            })
        })
    },

    updateimagen(id, url, producto_id, destacado){
        return new Promise((resolve, reject) => {
            db.run(querys.updateimagen, [ url, producto_id, destacado, id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },

    deleteimagen(id){
        return new Promise((resolve, reject) => {
            db.run(querys.deleteimagen, [id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },

    getcategory(){
        return new Promise((resolve, reject) => {
            db.all(querys.getcategory, (err, rows) => {
                if(err) reject(err);
                resolve(rows);
            })
        })
    },
    getcategory(id){
        return new Promise((resolve, reject) => {
            db.all(querys.getcategory, [id], (err, rows) => {
                if(err) reject(err);
                resolve(rows);
            })
        })
    },
    
    insertcategory(id, category_id, name){
        return new Promise((resolve, reject) => {
            db.all(querys.insertcategory, [category_id, name, id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },

    updatecategory(id, category_id, name){
        return new Promise((resolve, reject) => {
            db.run(querys.updatecategory, [ category_id, name, id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },

    deletecategory(id){
        return new Promise((resolve, reject) => {
            db.run(querys.deletecategory, [id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },
    
}

