/**
 * Loki NativeScript Adapter
 * @author Tobias Hennig <toias.hennig1@gmail.com>
 *
 * Example:
 * var fs = require("file-system");
 * var path = fs.path.join(fs.knownFolders.currentApp().path, "loki.db");
 * var tnsAdapter = new LokiNativeScriptAdapter();
 * var db = new Loki(path, { adapter: tnsAdapter });
 *
 * A NativeScript Adapter
 */

function LokiFsSystemAdapter() {
    this.fs = require('file-system');
}

/**
 * saveDatabase() - save data to file, will throw an error if the file can't be saved
 * @param {string} dbname - the filename of the database to load
 * @param {string} dbstring - the string to be written to the database
 * @param {function} callback - the callback to handle the result
 */
LokiFsSystemAdapter.prototype.saveDatabase = function saveDatabase(dbname, dbstring, callback) {
    var file = this.fs.File.fromPath(dbname);
    file.writeText(dbstring)
        .then(function () {
            callback();
        }, function (err) {
            callback(new Error(err));
        });
};

/**
 * loadDatabase() - Load data from file, will throw an error if the file does not exist
 * @param {string} dbname - the filename of the database to load
 * @param {function} callback - the callback to handle the result
 */
LokiFsSystemAdapter.prototype.loadDatabase = function loadDatabase(dbname, callback) {
    var file = this.fs.File.fromPath(dbname);
    file.readText()
        .then(function (content) {
            callback(content);
        }, function (err) {
            callback(new Error(err));
        });
};

module.exports = LokiFsSystemAdapter;