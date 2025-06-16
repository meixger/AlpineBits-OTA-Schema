const fs = require('fs');
const libxml = require('libxmljs');

const doc = 'GuestRequests-OTA_ResRetrieveRS-reservation.xml';
const schemaOta = './../schemas/alpinebits-2024-10.ota.xsd';
const schemaAlpineBits = './../schemas/alpinebits-2024-10.xsd';

const xmlString = fs.readFileSync(doc, 'utf-8');
const xmlDoc = libxml.parseXml(xmlString);

const xsdOtaString = fs.readFileSync(schemaOta, 'utf-8');
const xsdOtaDoc = libxml.parseXml(xsdOtaString);
const isOtaValid = xmlDoc.validate(xsdOtaDoc);
if (isOtaValid) console.log('OTA: valid');
else console.error('OTA: invalid');
xmlDoc.validationErrors.forEach(error => console.error(error.message));

const xsdABString = fs.readFileSync(schemaAlpineBits, 'utf-8');
const xsdABDoc = libxml.parseXml(xsdABString);
const isABValid = xmlDoc.validate(xsdABDoc);
if (isABValid) console.log('AlpineBits: valid');
else console.error('AlpineBits: invalid');
xmlDoc.validationErrors.forEach(error => console.error(error.message));
