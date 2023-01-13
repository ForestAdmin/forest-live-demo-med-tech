const { Sequelize } = require('sequelize');
const { faker } = require('@faker-js/faker');

const connection = new Sequelize('postgres://forest:secret@localhost:5435/med-tech');

(async () => {
  /*const generateFakePatientData = async numIterations => {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Gary', 'Hannah', 'Ian', 'Julia', 'Karen', 'Larry', 'Maggie', 'Nancy', 'Olivia', 'Pat', 'Quinn', 'Rachel', 'Sam', 'Tina', 'Ursula', 'Victor', 'Wanda', 'Xander', 'Yvonne', 'Zach', 'Sandro', 'Louis', 'Gabriel', 'Monika', 'Ophelie', 'Gautier', 'Adrian', 'Melody', 'Alexia', 'Mary'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Lewis', 'Parker', 'Baker', 'Green', 'Longbottom', 'Granger', 'Potter', 'Weasley', 'Castle', 'Donovan', 'Gudmansson'];
    const diagnoses = ['Flu', 'Allergies', 'Common cold', 'Bronchitis', 'Pneumonia', 'Ear infection', 'Sinus infection', 'Urinary tract infection', 'Strep throat', 'Skin infection', 'Food poisoning', 'Gastroenteritis', 'Mononucleosis', 'Migraine', 'Back pain', 'Hypertension', 'Acid reflux', 'Bronchiolitis', 'Constipation', 'Dermatitis', 'Diarrhea', 'Dyspepsia', 'Eczema', 'Gastritis', 'Hemorrhoids', 'Indigestion', 'Sore throat', 'Sinusitis', 'Tonsillitis'];
    const pathology = ['Cancer', 'Diabetes', 'Asthma', 'Arthritis', 'Depression', 'Anxiety', 'Hypertension', 'Chronic Pain', 'HIV', 'Heart Disease', 'Lupus', 'Multiple Sclerosis', "Parkinson''s Disease", 'Fibromyalgia', "Alzheimer''s Disease", 'Scleroderma', "Crohn''s Disease", 'Ulcerative Colitis', 'Sickle Cell Anemia', 'Leukemia', 'Liver Disease', 'Kidney Disease', 'Celiac Disease', "Addison''s Disease", "Cushing''s Disease", "Graves'' Disease", 'Hypothyroidism', 'Hyperthyroidism', 'PTSD', 'Bipolar Disorder', 'Schizophrenia', 'Anorexia Nervosa', 'Bulimia Nervosa', 'Obsessive-Compulsive Disorder', 'Autism Spectrum Disorder'];
    const queries = [];
    let query = 'INSERT INTO patients (first_name, last_name, age, gender, contact_info, medical_history, diagnosis, diagnosis_type, pathology) VALUES ';

    for (let i = 0; i < numIterations; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const age = Math.floor(Math.random() * (80 - 18 + 1)) + 18;
      const gender = Math.random() > 0.5 ? 'M' : 'F';
      const contactInfo = `${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`;
      const medicalHistory = Math.random() > 0.45 ? 'Healthy' : diagnoses[Math.floor(Math.random() * diagnoses.length)];
      const diagnosisType = medicalHistory === 'Healthy' ? null : Math.random() > 0.45 ? 'Chronic' : 'Mild';
      const diagnosis = medicalHistory === 'Healthy' ? null : diagnoses[Math.floor(Math.random() * diagnoses.length)];
      const pathologyType = diagnosisType === 'Chronic' ? pathology[Math.floor(Math.random() * pathology.length)] : null;
      queries.push(`('${firstName}', '${lastName}', ${age}, '${gender}', '${contactInfo}', '${medicalHistory}', '${diagnosis}', '${diagnosisType}', '${pathologyType}')`);
    }

    query = query + queries.join(',') + ';';

    await connection.query(query);
  };

// call the function to create the 100 instances of patients
  await generateFakePatientData(1000);

  const generateFakeDoctorData = async numIterations => {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Gary', 'Hannah', 'Ian', 'Julia', 'Karen', 'Larry', 'Maggie', 'Nancy', 'Olivia', 'Pat', 'Quinn', 'Rachel', 'Sam', 'Tina'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];
    const specialties = ['Primary Care', 'Pediatrics', 'Dermatology', 'OB/GYN', 'Orthopedics', 'Cardiology', 'Oncology', 'Neurology', 'Psychiatry'];
    const queries = [];
    let query = 'INSERT INTO doctors (first_name, last_name, age, gender, specialty, contact_information) VALUES ';

    for (let i = 0; i < numIterations; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const age = Math.floor(Math.random() * (65 - 25 + 1)) + 25;
      const gender = Math.random() > 0.5 ? 'M' : 'F';
      const specialty = specialties[Math.floor(Math.random() * specialties.length)];
      const contactInfo = `${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`;
      queries.push(`('${firstName}', '${lastName}', ${age}, '${gender}', '${specialty}', '${contactInfo}')`);
    }

    query = query + queries.join(',') + ';';

    await connection.query(query);
  };

// call the function to create the 100 instances of doctors
  await generateFakeDoctorData(100);

  const generateFakeClinicData = async numIterations => {
    const names = ['Family Clinic', 'Childrens Hospital', 'Advanced Medical Center', 'Urgent Care', "Women''s Health", "Men''s Health", 'Sports Medicine', 'Specialty Clinic', 'General Practice', 'Dental Clinic', 'Optometry Clinic', 'Ear, Nose, and Throat Clinic', 'Physical Therapy', 'Chiropractic', 'Acupuncture', 'Massage Therapy', 'Mental Health', 'Primary Care', 'Pediatrics', 'Dermatology'];
    const streetNames = ['Main St', 'Market St', 'Oak Ave', 'Maple St', 'Pine St', 'Cedar Blvd', 'Birch Ave', 'Willow St', 'Lincoln St', 'Madison St', 'Washington St', 'Jefferson St', 'Adams St', 'Jackson St', 'Roosevelt St', 'Truman St', 'Kennedy St', 'Johnson St', 'Nixon St', 'Ford St'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Washington D.C.'];
    const areaCodes = ['212', '310', '312', '313', '314', '315', '316', '317', '318', '319', '245', '30', '99'];
    const queries = [];
    let query = 'INSERT INTO clinics (clinic_name, address, phone_number) VALUES ';

    for (let i = 0; i < numIterations; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
      const streetNumber = Math.floor(Math.random() * 9999) + 1;
      const city = cities[Math.floor(Math.random() * cities.length)];
      const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
      const address = streetNumber + ' ' + streetName + ',' + city + ' ' + areaCode;
      const phoneNumber = `${areaCode}-${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`;
      queries.push(`('${name}', '${address}', '${phoneNumber}')`);
    }

    query = query + queries.join(',') + ';';

    await connection.query(query);
  };

// call the function to create the 100 instances of clinics
  await generateFakeClinicData(50);

  const generateFakeMedicationData = async numIterations => {
    const names = ['Acetaminophen', 'Adderall', 'Albuterol', 'Amoxicillin', 'Arthritis medication', 'Aspirin', 'Ativan', 'Azithromycin', 'Benadryl', 'Birth control pills', 'Celebrex', 'Cholesterol medication', 'Cialis', 'Ciprofloxacin', 'Claritin', 'Clindamycin', 'Codeine', 'Congestion medication', 'Coumadin', 'Cymbalta', 'Diazepam', 'Digoxin', 'Dilaudid', 'Doxycycline', 'Effexor', 'Enalapril', 'Epinephrine', 'Fentanyl', 'Fish oil', 'Flexeril', 'Flonase', 'Gabapentin', 'Hydrocodone', 'Hydroxychloroquine', 'Ibuprofen', 'Insulin', 'Lamotrigine', 'Lisinopril', 'Lithium', 'Lorazepam', 'Lyrica', 'Methylprednisolone', 'Metoprolol', 'Morphine', 'Naproxen', 'Nexium', 'Norco', 'Omeprazole', 'Oxycodone', 'Pantoprazole', 'Paracetamol', 'Percocet', 'Plavix', 'Prednisone', 'Propranolol', 'Prozac', 'Pseudoephedrine', 'Ritalin', 'Seroquel', 'Singulair', 'Soma', 'Suboxone', 'Synthroid', 'Tamsulosin', 'Topiramate', 'Tramadol', 'Tylenol', 'Valium', 'Viagra', 'Vicodin', 'Wellbutrin', 'Xanax', 'Zoloft', 'Zofran', 'Zolpidem'];
    const companies = ['Pfizer', 'Boehringer Ingelheim', 'Merck', 'GlaxoSmithKline', 'AstraZeneca', 'Johnson & Johnson', 'Eli Lilly', 'AbbVie', 'Roche', 'Sanofi'];
    const dosages = ['200mg', '250mg', '300mg', '350mg', '400mg', '450mg', '500mg'];
    const frequencies = ['Once daily', 'Twice daily', 'Three times daily', 'Four times daily'];
    let query = 'INSERT INTO medications (medication_name, company, dosage, frequency) VALUES ';
    const queries = [];

    for (let i = 0; i < numIterations; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const company = companies[Math.floor(Math.random() * companies.length)];
      const dosage = dosages[Math.floor(Math.random() * dosages.length)];
      const frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
      queries.push(`('${name}', '${company}', '${dosage}', '${frequency}')`);
    }

    query = query + queries.join(',') + ';';

    await connection.query(query);
  };

// call the function to create the 100 instances of medication
  await generateFakeMedicationData(600);*/

  //store the patient ids from the DB in order to use them later on for appointments and prescriptions
  const patientQueryResult = await connection.query('SELECT patient_id FROM patients');
  const patientIds = patientQueryResult[0].map((p) => p.patient_id );
  //store the medication ids from the DB in order to use them later on for appointments and prescriptions
  const medicationsQueryResult = await connection.query('SELECT medication_id FROM medications');
  const medicationIds = medicationsQueryResult[0].map((p) => p.medication_id );
  //store the clinics ids from the DB in order to use them later on for appointments and prescriptions
  const clinicsQueryResult = await connection.query('SELECT clinic_id FROM clinics');
  const clinicIds = clinicsQueryResult[0].map((p) => p.clinic_id );
  //store the doctors ids from the DB in order to use them later on for appointments and prescriptions
  const doctorsQueryResult = await connection.query('SELECT doctor_id FROM doctors');
  const doctorIds = doctorsQueryResult[0].map((p) => p.doctor_id );

  /*const generateFakeAppointmentData = async numIterations => {
    const reasons = ['Routine checkup', 'Sick visit', 'Follow-up', 'Preventative care', 'Other'];
    const queries = [];
    let query = 'INSERT INTO appointments (patient_id, doctor_id, clinic_id, date, time, reason, patient_confirmed, doctor_confirmed) VALUES ';

    for (let i = 0; i < numIterations; i++) {
      const patientId = patientIds.splice(Math.floor(Math.random() * patientIds.length), 1);
      const doctorId = doctorIds.splice(Math.floor(Math.random() * doctorIds.length), 1);
      const clinicId = clinicIds[Math.floor(Math.random() * clinicIds.length)];
      const endDate = new Date();
      const date = faker.date.between(new Date(), endDate.setFullYear(endDate.getFullYear() + 4)).toISOString().slice(0, 10);
      const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
      const minutes = [0, 30];
      const time = `${hours[Math.floor(Math.random() * hours.length)]}:${minutes[Math.floor(Math.random() * minutes.length)]}:00`
      const reason = reasons[Math.floor(Math.random() * reasons.length)];
      const patientConfirmed = Math.random() < 0.8;
      const doctorConfirmed = Math.random() < 0.8;
      queries.push(`(${patientId}, ${doctorId}, ${clinicId}, '${date}', '${time}', '${reason}', ${patientConfirmed}, ${doctorConfirmed})`);
    }

    query = query + queries.join(',') + ';';

    await connection.query(query);
  };


  await generateFakeAppointmentData(100);*/

  const generateFakePrescriptionData = async numIterations => {
    const dosages = ['500mg', '250mg', '100mg', '50mg'];
    const frequencies = ['Once daily', 'Twice daily', 'Three times daily'];
    const queries = [];
    let query = 'INSERT INTO prescriptions (patient_id, doctor_id, medication_id, dosage, frequency, start_date, end_date) VALUES '

    for (let i = 0; i < numIterations; i++) {
      const patientId = patientIds.splice(Math.floor(Math.random() * patientIds.length), 1)[0];
      const doctorId = doctorIds.splice(Math.floor(Math.random() * doctorIds.length), 1)[0];
      const medicationId = medicationIds.splice(Math.floor(Math.random() * medicationIds.length), 1)[0];
      const dosage = dosages[Math.floor(Math.random() * dosages.length)];
      const frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
      const date = new Date(Date.now() + (Math.random() * 604800000));
      const startDate = date.toISOString().slice(0, 10);
      date.setMonth(date.getMonth() + (Math.floor(Math.random() * 3)))
      const endDate = date.toISOString().slice(0, 10);
      queries.push(`(${patientId}, ${doctorId}, ${medicationId}, '${dosage}', '${frequency}', '${startDate}', '${endDate}')`);
    }

    query = query + queries.join(',') + ';';

    await connection.query(query);
  };

  await generateFakePrescriptionData(100);
})().catch((e) => {
  console.log(e);
});