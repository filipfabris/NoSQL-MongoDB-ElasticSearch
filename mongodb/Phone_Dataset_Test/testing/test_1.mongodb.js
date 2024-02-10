use ("testMongoDB")

var document = db.contacts.findOne();
if (document) {
    var birthDateType = typeof document.birth_date;
    print("Data type of 'birth_date': " + birthDateType);
} else {
    print("No document found in the 'contacts' collection.");
}
