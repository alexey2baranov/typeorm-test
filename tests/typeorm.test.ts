import {createConnection, getConnection} from "typeorm";
import * as oracledb from 'oracledb'
import {Employee} from "../src/entity/Employee";
import {Company} from "../src/entity/Company";

describe('typeorm', () => {
    beforeAll(async () => {
        await createConnection()
    })

    it('connect', async () => {
    })
    it('save', async () => {
        const user = new Employee()
        user.firstName = "Boroda"
        await user.save()
    })

    it('reload', async () => {
        const employee = new Employee()
        employee.firstName = "Reload"
        await employee.save()
        expect(employee.id).not.toBeUndefined()
    })

    it('find', async () => {
        // const entityManager = getManager(); // you can also get it via getConnection().manager
        // const user = await entityManager.findOne(Employee, 1);
        await Employee.findOneOrFail(1)
    })
    it('many-to-one', async () => {
        let company= Company.create()
        company.name="one-to-many"
        // company.staff=[employee]
        let id= await company.save()
        console.log("company", company)

        let employee=new Employee()
        employee.firstName="many-to-one"
        employee.workplace= company
        await employee.save()

        await company.reload()
        let rows= await getConnection().query('select * from C##SOVA."employee" where "workplaceId"=:companyId',[company.id])
        console.log("rows",rows)
        expect(rows.length).toBe(1)
    })
})
