import Announcements from "@/components/Announcements"
import AttendentChart from "@/components/AttendentChart"
import CountChart from "@/components/CountChart"
import EventCalender from "@/components/EventCalender"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student"/>
            <UserCard type="teacher"/>
            <UserCard type="parent"/>
            <UserCard type="staff"/>
        </div>
        {/* Middle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row ">
          {/* Count Chart */}
            <div className="w-full lg:w-1/3 h-[450px]">
              <CountChart/>
            </div>
            {/* Attendance Chart */}
            <div className="w-full lg:w-2/3 h-[450px]">
            <AttendentChart/>
            </div>
        </div>
        {/* Bottom Chart */}
        <div className="w-full h-[500px]">
           <FinanceChart/>
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex-col gap-8">
        <EventCalender/>
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage