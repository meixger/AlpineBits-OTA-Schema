using System.Xml;
using System.Xml.Schema;

var xmlDoc = new XmlDocument();
string filename = @"GuestRequests-OTA_ResRetrieveRS-reservation.xml";
xmlDoc.Load(filename);

string schemaFile = @"..\schemas\alpinebits-2024-10.ota.xsd";
var schemaOta = XmlSchema.Read(new XmlTextReader(schemaFile), (s, e) => Console.WriteLine(e.Message))!;
xmlDoc.Schemas.Add(schemaOta);
xmlDoc.Validate((s, e) => Console.WriteLine($"OTA: {e.Message}"));

xmlDoc.Schemas.Remove(schemaOta);
string schemaFileAlpineBits = @"..\schemas\alpinebits-2024-10.xsd";
var schemaAlpineBits = XmlSchema.Read(new XmlTextReader(schemaFileAlpineBits), (s, e) => Console.WriteLine(e.Message))!;
xmlDoc.Schemas.Add(schemaAlpineBits);
xmlDoc.Validate((s, e) => Console.WriteLine($"AlpineBits: {e.Message}"));
