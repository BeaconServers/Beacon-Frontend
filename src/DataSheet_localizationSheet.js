// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "mainlogin_textblock_519867";
    item['en'] = "Login to your Beacon Account";
    
    item = {};
    this.items.push(item);
    item['key'] = "mainlogin_button_1029434";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_textblock_1018239";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_textblock_238288";
    item['en'] = "Team Fortress 2";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_textblock_588784";
    item['en'] = "Beacon Client v0.1-alpha";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_validator_477625";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "cmp_gamemapselection_textblock_641019";
    item['en'] = "PLACE HOLDER";
    
    item = {};
    this.items.push(item);
    item['key'] = "cmp_gamemapselection_checkbox_80271";
    item['en'] = "PLACE HOLDER";
    
    item = {};
    this.items.push(item);
    item['key'] = "cmp_gamemenu_folder_text_509402";
    item['en'] = "PLACEHOLDER";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
