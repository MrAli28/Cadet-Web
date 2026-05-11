import { Briefcase, FileText, CheckCircle2, ChevronRight, Mail } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const openPositions = [
  {
    title: "Senior Lecturer in Mathematics",
    department: "Academics",
    type: "Full-Time",
    deadline: "October 15, 2026",
  },
  {
    title: "Physical Training Instructor",
    department: "Sports & Athletics",
    type: "Contract",
    deadline: "Open until filled",
  },
  {
    title: "Hostel Warden",
    department: "Administration",
    type: "Full-Time",
    deadline: "October 20, 2026",
  },
];

const recruitmentSteps = [
  { step: "1", title: "Submit Application", desc: "Send your updated resume and cover letter via email." },
  { step: "2", title: "Initial Screening", desc: "Our HR team reviews qualifications against role requirements." },
  { step: "3", title: "Panel Interview", desc: "Shortlisted candidates are invited for a formal interview." },
  { step: "4", title: "Demo Session", desc: "For academic roles, a short teaching demonstration is required." },
  { step: "5", title: "Final Offer", desc: "Successful candidates receive a formal offer letter." },
];

const Career = () => {
  return (
    <div className="page-block">
      <PageBanner 
        title="Careers at BCS" 
        subtitle="Shape the future. Join our team of dedicated educators and professionals." 
      />
      
      <section className="py-16 bg-background">
        <div className="bcs-container">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column - Job Board */}
            <div className="lg:w-2/3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-bcs-dark-text font-lufga mb-2">Current Advertisements</h2>
                <p className="text-bcs-body-text mb-6">Explore our open positions below. Click on any role to learn more about the requirements and apply.</p>
              </div>

              <div className="space-y-4">
                {openPositions.length > 0 ? (
                  openPositions.map((job, idx) => (
                    <div key={idx} className="bg-white border border-black/10 rounded-sm p-6 hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-bcs-light-gray p-3 rounded-full text-bcs-dark-navy mt-1">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-bcs-dark-text group-hover:text-bcs-green transition-colors">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-bcs-body-text mt-2">
                            <span className="bg-bcs-light-gray px-2 py-0.5 rounded-sm">{job.department}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                            <span>•</span>
                            <span className="text-bcs-green font-medium">Deadline: {job.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <button className="flex items-center text-sm font-bold text-bcs-green uppercase tracking-wider group-hover:underline self-start md:self-center">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="bg-bcs-light-gray p-8 text-center rounded-sm border border-black/5">
                    <p className="text-bcs-body-text">There are currently no open positions. Please check back later.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Process & Contact */}
            <div className="lg:w-1/3 space-y-8">
              
              <div className="bg-bcs-light-gray rounded-sm p-8 border-t-4 border-bcs-gold shadow-sm">
                <h3 className="text-xl font-bold text-bcs-dark-text font-lufga mb-6">Our Hiring Process</h3>
                <div className="space-y-6">
                  {recruitmentSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-bcs-gold text-bcs-dark-navy font-bold flex items-center justify-center flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-bcs-dark-text text-sm">{step.title}</h4>
                        <p className="text-xs text-bcs-body-text mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bcs-dark-navy text-white rounded-sm p-8 shadow-lg text-center">
                <Mail className="w-8 h-8 text-bcs-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold font-lufga mb-2">Submit Resume</h3>
                <p className="text-sm text-white/80 mb-6">
                  Don't see a role that fits? You can still drop your resume for future opportunities.
                </p>
                <a href="mailto:hr@bcs.edu.pk" className="bcs-btn-primary bg-bcs-gold text-bcs-dark-text hover:bg-white w-full block">
                  Email hr@bcs.edu.pk
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Career;
