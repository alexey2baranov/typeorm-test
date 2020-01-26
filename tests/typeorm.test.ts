import {createConnection, getConnection} from "typeorm";
import * as oracledb from 'oracledb'
import {Employee} from "../src/entity/Employee";

describe('typeorm', () => {
    beforeAll(async () => {
        await createConnection()
    })

    it('connect', async () => {
    })

    it('reload', async () => {
        const employee = new Employee()
        employee.firstName = "Reload"
        await employee.save()
        expect(employee.id).not.toBeUndefined()
    })
})
