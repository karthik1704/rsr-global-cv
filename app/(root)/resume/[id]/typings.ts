export type ResumeType = {
    resume_title: string;
    job_applied_for: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    nationality: string;
    address_line_1: string;
    address_line_2: string;
    postal_code: string;
    city: string;
    country: string;
    email_address: string;
    contact_number: string;
    responsibilities: string;
    referred_by: string;
    id: number;
    user_id: number;
    resume_image: string;
    experiences: Experience[];
    education: Education[];
    language_skills: LanguageSkill;
    driving_license: DrivingLicense[];
    training_awards: TrainingAward[];
    others: Other[];
}

export type Experience = {
    employer: string;
    website: string;
    location: string;
    occupation: string;
    from_date: string;
    to_date: string;
    currently_working: boolean;
    about_company: string;
    responsibilities: string;
    id: number;
    resume_id: number;
}

export type Education = {
    title_of_qualification: string;
    organization_name: string;
    from_date: string;
    to_date: string;
    city: string;
    country: string;
    id: number;
    resume_id: number;
}

export type LanguageSkill = {
    language: string;
    other_languages: string;
    id: number;
    resume_id: number;
}

export type DrivingLicense = {
    license_type: string;
    license_issued_date: string;
    license_expiry_date: string;
    id: number;
    resume_id: number;
}

export type TrainingAward = {
    title: string;
    awarding_institute: string;
    from_date: string;
    to_date: string;
    location: string;
    id: number;
    resume_id: number;
}

export type Other = {
    sectiontitle: string;
    title: string;
    description: string;
    id: number;
    resume_id: number;
}