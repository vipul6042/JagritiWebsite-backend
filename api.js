const hostLink="http://localhost:3000"

/*ADMIN APIS */

//for event controlles

const createNewEvent=`${hostLink}/admin/createEvent/addEvent`
const updateEvent=`${hostLink}/admin/updateEvent/events`
const deleteEvent=`${hostLink}/admin/deleteEvent/events`

const createNewPreEvent=`${hostLink}/admin/createEvent/addPreEvent`
const updatePreEvent=`${hostLink}/admin/updateEvent/preEvents`
const deletePreEvent=`${hostLink}/admin/deleteEvent/preEvents`

const createNewguestTalk=`${hostLink}/admin/createEvent/addGuestTalks`
const updateguestTalk=`${hostLink}/admin/updateEvent/guestTalks`
const deleteguestTalk=`${hostLink}/admin/deleteEvent/guestTalks`

//for user controlles
const getUsers=`${hostLink}/auth/getAllUser`
const getAllCA=`${hostLink}/ca/getAllCA`  //not created in ca routes

/*USER APIS */
const createNewUser=`${hostLink}/auth/createUser`
const updateUser=`${hostLink}/auth/updateuser`
const deleteUser=`${hostLink}/auth/deleteUser`
const toCheckUserExist=`${hostLink}/auth/checkUser`

const getEvents=`${hostLink}/admin/event`
const getPreEvents=`${hostLink}/admin/preEvent`
const getGuestTalks=`${hostLink}/admin/GuestTalks`

//to regiserter in event or gusetTalk or preEvent(change only in user modal)
const registerAnyEvent=`${hostLink}/auth/addEvent`
const unRegisterAnyEvent=`${hostLink}/auth/deleteEvent`


/*CA APIS */
const createNewCa=`${hostLink}/ca/createCA`
const updateCa=`${hostLink}/ca/updateCA`
const deleteCa=`${hostLink}/ca/deleteCA`