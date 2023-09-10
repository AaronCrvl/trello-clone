import ProjectManagementLoader from "./templateLoaders/projectManagementLoader";
import HabitControlLoader from "./templateLoaders/habitControlTemplateLoader";
import EditorialCalendar from "./templateLoaders/editorialCalendarTemplateLoader";
import IntegrationOfNewEmployeesTemplateLoader from "./templateLoaders/integrationOfNewEmployeesTemplateLoader";
import ScrumProjectModelTemplate from "./templateLoaders/scrumProjectModelTemplate";
import EmployeeManualTemplate from "./templateLoaders/employeeManualTemplate";
import FamilyManagementTemplate from "./templateLoaders/familyManagementTemplate";
import { configObjectType } from "../../types/configObjectType";

export default class Loaders {
  private projectManagement = new ProjectManagementLoader()
  private habitControl = new HabitControlLoader()
  private editorialCalendar = new EditorialCalendar()
  private integrationOfNewEmployees = new IntegrationOfNewEmployeesTemplateLoader()
  private scrumProjectModelTemplate = new ScrumProjectModelTemplate()
  private employeeManualTemplate = new EmployeeManualTemplate()
  private familyManagementTemplate = new FamilyManagementTemplate()

  public getTemplate (templateId : any) : Promise<Array<configObjectType> | null> {
    return new Promise((resolve, reject) => {
      if(templateId === -1)resolve(EmptyObj())      
      if(templateId === 0) resolve(this.projectManagement.getBoards())
      if(templateId === 1) resolve(this.habitControl.getBoards())
      if(templateId === 2) resolve(this.editorialCalendar.getBoards())
      if(templateId === 3) resolve(this.integrationOfNewEmployees.getBoards())
      if(templateId === 4) resolve(this.scrumProjectModelTemplate.getBoards())      
      if(templateId === 5) resolve(this.employeeManualTemplate.getBoards())
      if(templateId === 6) resolve(this.familyManagementTemplate.getBoards())      
    })
  }
} // !_☄

function EmptyObj() : any {
  let dataJson = [{"configObject":{"name":"","boardColor":"bg-transparent", "ready":false,"tasks":[], "parentCallback": ()=>{}}}, ]        
  return new Response(JSON.stringify(dataJson), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  })
} // !_☄