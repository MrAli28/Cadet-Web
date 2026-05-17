import PageBanner from "@/components/PageBanner";

const CadetLifeInOurCampus = () => {
  return (
    <div className="page-block">
      <PageBanner title="Cadet Life at Our Campus" subtitle="A disciplined daily regimen combining academics, physical training, and character formation to shape confident future leaders." />

      <section className="py-16 bg-bcs-light-gray">
        <div className="bcs-container space-y-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bcs-dark-text font-lufga mb-4">Cadet Life at Our Campus</h2>
            <p className="text-bcs-body-text">Life at our cadet school is carefully structured to cultivate discipline, academic excellence, spiritual growth, and physical fitness. Each day follows a balanced routine that helps cadets develop the habits and character required to become confident, responsible, and well-rounded individuals.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <article className="page-surface p-6">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Early Morning Routine</h3>
              <p className="text-bcs-body-text">The day begins before sunrise with Fajr Prayer, instilling punctuality and spiritual mindfulness. After prayer, cadets participate in Nazra Quran, which strengthens their connection with Islamic teachings and values. Following this, cadets enjoy a nutritious breakfast and prepare themselves for the academic day ahead.</p>
            </article>

            <article className="page-surface p-6">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Academic Schedule</h3>
              <p className="text-bcs-body-text">Formal classes commence at 8:00 AM. During school hours, cadets engage in a rigorous academic program delivered by qualified and experienced faculty members in a disciplined learning environment. From 12:00 PM to 1:00 PM, cadets break for Dhuhr Prayer and lunch, providing time for both spiritual reflection and refreshment. Academic classes continue until 3:00 PM, when the formal school day concludes.</p>
            </article>

            <article className="page-surface p-6">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Sports and Physical Training</h3>
              <p className="text-bcs-body-text">Physical fitness is an integral part of cadet life. From 4:00 PM to 6:00 PM, cadets participate in a variety of games and sports, including cricket, football, athletics, and other recreational activities. These sessions promote teamwork, endurance, leadership, and healthy competition.</p>
            </article>

            <article className="page-surface p-6">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Evening Study Sessions</h3>
              <p className="text-bcs-body-text">After sports, cadets attend supervised tuition and study classes from 6:00 PM to 9:00 PM. During this period, they revise lessons, complete assignments, and receive academic support from instructors.</p>
            </article>

            <article className="page-surface p-6">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Night Routine</h3>
              <p className="text-bcs-body-text">From 9:00 PM to 10:00 PM, cadets offer their night prayers and have dinner. This final part of the day provides an opportunity to relax and prepare for the next day’s challenges.</p>
            </article>

            <article className="page-surface p-6">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Character Building Through Routine</h3>
              <p className="text-bcs-body-text">The daily routine at our cadet school is designed to foster:</p>
              <ul className="list-disc list-inside space-y-2 text-bcs-body-text mt-3">
                <li>Strong moral and Islamic values</li>
                <li>Academic achievement</li>
                <li>Physical fitness</li>
                <li>Self-discipline</li>
                <li>Leadership qualities</li>
                <li>Time management skills</li>
              </ul>
              <p className="mt-4 text-bcs-body-text">At our campus, cadet life is more than a schedule—it is a transformative experience that prepares students to excel in education, serve society, and lead with integrity.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CadetLifeInOurCampus;
