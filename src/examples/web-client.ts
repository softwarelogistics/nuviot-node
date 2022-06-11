import {ActivatedRoute, HttpClient, Router} from '../core/utils'
import { ErrorReporterService } from '../services/error-reporter.service';
import { NetworkCallStatusService } from '../services/network-call-status-service';
import { NuviotClientService } from '../services/nuviot-client.service';
import {UserService} from '../services/user.service'

let http = new HttpClient();
let client = new NuviotClientService(http, new NetworkCallStatusService(), new ErrorReporterService());
let usr = new UserService(http, client, new ErrorReporterService(), new Router(), new ActivatedRoute())

async function login(email: string, password: string) {
     let user = await usr.auth(email, password);
     console.log(user.successful);
     console.log(user.result.user.text);
     console.log(user.result.user.id);
}

console.log(login("[EMAIL]", "[PASSWORD]"));