import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import AdminMain from './pages/admin/adminMain';
import StudentMain from './pages/student/studentHome';
import PanelMain from './pages/staff/panel members/main';
import SupervisorMain from './pages/staff/Supervisors/main';
import ResearchSubmit from './pages/student/researchSubmit';
import StudentReg from './pages/admin/studentReg';
import AddAssignment from './pages/admin/addAssignment';
import AddSchema from './pages/admin/addShema';
import AllForUser from './pages/group/allGroup';
import GroupReg from './pages/group/GroupRegister';
import GroupView from './pages/group/Group_View';
import StaffRegister from './pages/admin/staffReg';
import AdminRegister from './pages/admin/adminReg';
import ViewAssignment from './pages/admin/viewAssignment';
import EmailVerify from './pages/Emailverify/EmailVerify';
import Login from './pages/Login';
import StudentViewAssignment from './pages/student/assignmentView';
import ChatMain from './pages/chat/chat';
import GroupEdit from './pages/group/Group_Edit';
import TopicRegister from './pages/topic/Topic_register';
import TopicView from './pages/topic/Topic_View';
import ViewAssignmentSubmission from './pages/staff/Supervisors/submissionView';
import AddNotices from "./pages/Notice/AddNotice";
import ViewNotices from "./pages/Notice/viewNotice";
import UdateNotices from "./pages/Notice/Update_Notices";
import AdminSchemaView from './pages/admin/viewSchema';
import StaffSchemaViews from './pages/staff/Supervisors/viewSchema';
import StudentSchemaView from './pages/student/viewSchema';
import ViewUsers from './pages/admin/viewUsers';
import ViewSupervisors from './pages/admin/viewSupervisors';
import ViewAdmin from './pages/admin/viewAdmin';
import ViewPanelMembers from './pages/admin/viewPanelMem';
import PanelReg from './pages/panels/panelAdd';
import ViewPanels from './pages/panels/viewPanels';
import ViewPanelsStudent from './pages/panels/viewPanelsStudent';
import ViewPanelsMem from './pages/panels/viewPanelsMembers';
import TopicViewPanel from './pages/topic/viewTopicsPanels';
import ViewAssignmentSubmissionPanel from './pages/staff/panel members/researchSubEve';
import StaffSchemaViewPan from './pages/staff/panel members/schemaView';
import TopicViewStd from './pages/topic/viewTopicStudents';
import ContactUS from './pages/student/Contactus';
import GroupStudentView from './pages/group/groupStudentView';
import ContactUSSupervisor from './pages/staff/Supervisors/ContactUsSupervisor';
import ContactUSPanel from './pages/staff/panel members/contactUsPanel';
import ViewPanelsMemberSupervisor from './pages/staff/Supervisors/submissionViewPanel';
import ViewPanelsSup from './pages/panels/viewPanelsSup';
import TopicViewAdmin from './pages/topic/viewTopicAdmin';

export default class App extends React.Component {

 constructor(props) {
    super(props);
 }

 render() {
    return(
        <BrowserRouter>
        {/* <h1>Hello to React APP</h1> */}

         <Routes>

            <Route path="/" element={<Main />} />

            <Route path="/Admin" element={<AdminMain />} />
            <Route path="/Admin/AddAssignment" element={<AddAssignment />} /> 
            <Route path="/Admin/ViewAssignment" element={<ViewAssignment />} />           
            <Route path="/Admin/AddSchema" element={<AddSchema />} />
            <Route path="/Admin/viewSchema" element={<AdminSchemaView />} />
            <Route path="/Admin/GroupView" element={<GroupView />} />
            <Route path="/Admin/Topic_View" element={<TopicView/>} />
            <Route path='/Admin/AddNotices' element={<AddNotices/>}/>
            <Route path='/Admin/viewNotice'element={<ViewNotices/>}/>
            <Route path="/Admin/ViewUsers" element={<ViewUsers />} />
            <Route path="/Admin/ViewSupervisors" element={<ViewSupervisors />} />
            <Route path="/Admin/ViewAdmin" element={<ViewAdmin />} />
            <Route path="/Admin/ViewPanelMembers" element={<ViewPanelMembers />} />
            <Route path="/Admin/PanelReg" element={<PanelReg />} />
            <Route path="/Admin/ViewPanels" element={<ViewPanels />} />
            <Route path="/Admin/TopicView" element={<TopicViewAdmin />} />
                        
            <Route path="/StudentReg" element={<StudentReg />} />
            <Route path="/StaffRegister" element={<StaffRegister />} />
            <Route path="/AdminRegister" element={<AdminRegister />} />
            <Route path="/users/:id/verify/:token/" element={<EmailVerify />} />
            <Route path="/login" element={<Login />} />

            <Route path="/Student" element={<StudentMain />} />
            <Route path="/Student/ResearchSub" element={<ResearchSubmit />} />
            <Route path="/Student/TopicRegister" element={<TopicRegister />} />
            <Route path="/Student/AllGroup" element={<AllForUser />} />
            <Route path="/Student/GroupAdd" element={<GroupReg />} />
            <Route path="/Student/ViewAssignment" element={<StudentViewAssignment />} />
            {/* <Route path="/Student/GroupView" element={<GroupView />} /> */}
            <Route path="/Student/Group_Edit/:id" element={<GroupEdit />} />
            <Route path="/Student/Topic_register" element={<TopicRegister/>} />
            <Route path="/Student/Topic_view_std" element={<TopicViewStd/>} />
            <Route path="/Student/ResultView" element={<StudentSchemaView/>} />            
            <Route path="/Student/ViewPanelsStudent" element={<ViewPanelsStudent/>} />          
            <Route path="/Student/Contact" element={<ContactUS/>} />
            <Route path="/Student/GroupStudentView" element={<GroupStudentView/>} />
   
           

            <Route path="/Panel" element={<PanelMain />} />
         
            <Route path="/Panel/ViewPanelsMem" element={<ViewPanelsMem />} />
            <Route path="/Panel/TopicViewPanel" element={<TopicViewPanel />} />
            <Route path="/Panel/researchView" element={< ViewAssignmentSubmissionPanel/>} />
            <Route path="/Panel/viewSchema" element={< StaffSchemaViewPan/>} />
            <Route path="/Panel/ContactUs" element={<ContactUSPanel/>} />
 
            <Route path="/Supervisor" element={<SupervisorMain />} />
            <Route path="/Supervisor/researchView" element={<ViewAssignmentSubmission />} />
            <Route path="/Supervisor/viewSchema" element={<StaffSchemaViews />} />
            <Route path="/Supervisor/Topic_View" element={<TopicView/>} />
            <Route path="/Supervisor/contactUs" element={<ContactUSSupervisor/>} />
            <Route path="/Supervisor/ViewPanelsMember" element={<ViewPanelsMemberSupervisor/>} />
            
            
            <Route path='/UpdateNotice/:id'element={<UdateNotices/>}/>
            
            <Route path="/Chat" element={<ChatMain />} />
          

            {/* <Route path="/cal"element={<Cal/>}/> */}
         </Routes>
                     

        {/* <Header/> */}

        </BrowserRouter>
      );
   }
}
