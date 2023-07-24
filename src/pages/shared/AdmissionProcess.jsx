import { HiCheckCircle } from "react-icons/hi";

const AdmissionProcess = () => {
    return (
        <div className="bg-base-100 p-5 lg:w-96 rounded-md shadow-2xl">
            <img className="w-full rounded-md" src="https://img.freepik.com/premium-photo/portrait-group-students-celebrating-their-graduation_23-2148201817.jpg?w=740" alt="student" />
            <h4 className="my-5 font-semibold text-xl title-color">Admission Process:</h4>
            <p className="text-gray-600 text-justify mb-4">The outcome of the admission process may affect a students future career trajectory considerably.</p>
            <div className="text-gray-600 space-y-2">
                <p className="flex items-center gap-1"><HiCheckCircle className="text-teal-500" /> Step 1: Application to Universities</p>
                <p className="flex items-center gap-1"><HiCheckCircle className="text-teal-500" /> Step 2: Finding the right program</p>
                <p className="flex items-center gap-1"><HiCheckCircle className="text-teal-500" /> Step 3:  Submit Online Applications</p>
                <p className="flex items-center gap-1"><HiCheckCircle className="text-teal-500" /> Step 4: Pay Application Fees</p>
                <p className="flex items-center gap-1"><HiCheckCircle className="text-teal-500" /> Step 5: MCQ or Written Exam</p>
                <p className="flex items-center gap-1"><HiCheckCircle className="text-teal-500" /> Step 6: Presentation (Viva Voce)</p>
                <p className="flex items-center gap-1"><HiCheckCircle className="text-teal-500" /> Step 7: Begin Your University Journey</p>
            </div>
            <div className="text-center mt-8">
                <button className="my-btn">Apply Now</button>
            </div>
        </div>
    );
};

export default AdmissionProcess;