CREATE TABLE patients (
	patient_id SERIAL PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	age INTEGER NOT NULL,
	gender TEXT NOT NULL,
	contact_info TEXT NOT NULL,
	medical_history TEXT NOT NULL,
	diagnosis TEXT NOT NULL,
	diagnosis_type TEXT DEFAULT 'mild',
	pathology TEXT,
	insurance_coverage BOOLEAN DEFAULT FALSE,
	insurance_name TEXT
);

CREATE TABLE doctors (
  doctor_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  specialty TEXT NOT NULL,
  contact_information TEXT NOT NULL
);

CREATE TABLE clinics (
  clinic_id SERIAL PRIMARY KEY,
  clinic_name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone_number TEXT NOT NULL
);

CREATE TABLE medications (
  medication_id SERIAL PRIMARY KEY,
  medication_name TEXT NOT NULL,
  company TEXT NOT NULL,
  dosage TEXT NOT NULL,
  frequency TEXT NOT NULL
);

CREATE TABLE appointments (
  appointment_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(patient_id),
  doctor_id INTEGER REFERENCES doctors(doctor_id),
  clinic_id INTEGER REFERENCES clinics(clinic_id),
  date DATE NOT NULL,
  time TIME NOT NULL,
  reason VARCHAR(255) NOT NULL,
  patient_confirmed BOOLEAN NOT NULL,
  doctor_confirmed BOOLEAN NOT NULL
);

CREATE TABLE prescriptions (
  usage_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(patient_id),
  doctor_id INTEGER REFERENCES doctors(doctor_id),
  medication_id INTEGER REFERENCES medications(medication_id),
  dosage TEXT NOT NULL,
  frequency TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);