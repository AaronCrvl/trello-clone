import ProjectManagementLoader from "./templateLoaders/projectManagementLoader";
import HabitControlLoader from "./templateLoaders/habitControlTemplateLoader";
import EditorialCalendar from "./templateLoaders/editorialCalendarTemplateLoader";
import IntegrationOfNewEmployeesTemplateLoader from "./templateLoaders/integrationOfNewEmployeesTemplateLoader";
import ScrumProjectModelTemplate from "./templateLoaders/scrumProjectModelTemplate";
import EmployeeManualTemplate from "./templateLoaders/employeeManualTemplate";
import FamilyManagementTemplate from "./templateLoaders/familyManagementTemplate";
import { configObjectType } from "../../types/configObjectType";
import { rejects } from "assert";

export default class Loaders {
  private projectManagement = new ProjectManagementLoader()
  private habitControl = new HabitControlLoader()
  private editorialCalendar = new EditorialCalendar()
  private integrationOfNewEmployees = new IntegrationOfNewEmployeesTemplateLoader()
  private scrumProjectModelTemplate = new ScrumProjectModelTemplate()
  private employeeManualTemplate = new EmployeeManualTemplate()
  private familyManagementTemplate = new FamilyManagementTemplate()

  public getTemplate (templateId : any) : Promise<Array<configObjectType> | null> {
    return new Promise((resolve) => {      
      if(templateId === 0) resolve(this.projectManagement.getBoards())
      else if(templateId === 1) resolve(this.habitControl.getBoards())
      else if(templateId === 2) resolve(this.editorialCalendar.getBoards())
      else if(templateId === 3) resolve(this.integrationOfNewEmployees.getBoards())
      else if(templateId === 4) resolve(this.scrumProjectModelTemplate.getBoards())      
      else if(templateId === 5) resolve(this.employeeManualTemplate.getBoards())
      else if(templateId === 6) resolve(this.familyManagementTemplate.getBoards())      
      else resolve(EmptyObj())      
    })
  }

  public getBoardTemplateList() : Promise<any> {
    return Promise.resolve(
      [        
        // Id, Category, Name
        [0,'Management', 'Project Managment'],
        [1,'Personal', 'Habit Control'], 
        [2,'Calendar','Editorial Calendar'], 
        [3,'Human Resources','Integration of New Employees'],
        [4,'Management', 'Scrum Project Model'],
        [5,'Human Resources', 'Employee Manual'],      
        [6,'Personal', 'Family Management'], 
    ])
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