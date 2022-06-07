
import { environment } from '../core/utils';
import { HttpClient, HttpHeaders } from '../core/utils';
import { ErrorReporterService } from './error-reporter.service';
import 'rxjs/add/operator/toPromise';
import { NetworkCallStatusService } from './network-call-status-service';



export class NuviotClientService {

  constructor(private http: HttpClient,
    private networkCallService: NetworkCallStatusService,
    private errorReporter: ErrorReporterService) { }

  getListResponse<TData>(path: string, filter: Core.ListFilter = null): Promise<Core.ListResponse<TData>> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    let headers = new HttpHeaders();
    if (filter) {
      if (filter.start) {
        headers = headers.append('x-filter-startdate', filter.start);
      }
      if (filter.end) {
        headers = headers.append('x-filter-enddate', filter.end);
      }
      if (filter.groupBy) {
        headers = headers.append('x-group-by', filter.groupBy);
      }
      if (filter.groupBySize) {
        headers = headers.append('x-group-by-size', filter.groupBySize.toString());
      }
      if (filter.nextPartitionKey) {
        headers = headers.append('x-nextpartitionkey', filter.nextPartitionKey);
      }
      if (filter.nextRowKey) {
        headers = headers.append('x-nextrowkey', filter.nextRowKey);
      }
      if (filter.pageSize) {
        headers = headers.append('x-pagesize', filter.pageSize.toString());
      }
      if (filter.pageIndex) {
        headers = headers.append('x-pageindex', filter.pageIndex.toString());
      }
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.ListResponse<TData>>((resolve, reject) => {
      this.http.get<Core.ListResponse<TData>>(`${environment.siteUri}/${path}`, { headers: headers })
        .subscribe((response) => {
          this.networkCallService.endCall();
          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            if (reject) {
              reject(response.errors[0].message);
            }
          }
        },
          (err) => {
            this.networkCallService.endCall();
            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }

  getMarkDownContent(path: string): Promise<string> {
    const basePath = 'https://raw.githubusercontent.com/LagoVista/docs/master/guides';
    const promise = new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 &&
          this.status === 200) {
          resolve(xhr.responseText);
        }
      };

      xhr.open('GET', `${basePath}${path}`, true);
      xhr.send();
    });

    return promise;
  }

  getBlobResponse(path: string, fileName: string): Promise<Blob> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    const uri = `${environment.siteUri}/${path}`;
    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.setAttribute('href', uri);
    downloadLink.setAttribute('target', '_blank');
    downloadLink.setAttribute('download', fileName);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    return null;
  }

  getDateFilterHeaders(start: string, end: string): any[] {
    return [
      { 'x-filter-startdate': start },
      { 'x-filter-enddate': end }
    ];
  }

  requestForInvokeResultEx<TData>(path: string): Promise<Core.InvokeResultEx<TData>> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.InvokeResultEx<TData>>((resolve, reject) => {
      this.http.get<Core.InvokeResultEx<TData>>(`${environment.siteUri}/${path}`)
        .subscribe((response) => {
          this.networkCallService.endCall();
          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            if (reject) {
              reject(response.errors[0].message);
            }
          }
        },
          (err) => {
            this.networkCallService.endCall();
            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }

  request<TData>(path: string): Promise<TData> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }
    this.networkCallService.beginCall();
    const promise = new Promise<TData>((resolve, reject) => {
      this.http.get<TData>(`${environment.siteUri}/${path}`)
        .subscribe((response) => {
          this.networkCallService.endCall();
          resolve(response);
        },
          (err) => {
            this.networkCallService.endCall();
            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }


  get(path: string): Promise<Core.InvokeResult> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }
    this.networkCallService.beginCall();
    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {
      this.http.get<Core.InvokeResult>(`${environment.siteUri}/${path}`)
        .toPromise()
        .then((response) => {
          this.networkCallService.endCall();
          if (!response.successful) {
            this.errorReporter.addMessage(response.errors[0].message);
          }
          else {
            resolve(response);
          }
        })
        .catch(err => {
          this.networkCallService.endCall();
          if (reject) {
            reject(err);
          }
        });
    });

    return promise;
  }

  getFormResponse<TModel, TView>(path: string): Promise<Core.FormResult<TModel, TView>> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.FormResult<TModel, TView>>((resolve, reject) => {
      this.http.get<Core.FormResult<TModel, TView>>(`${environment.siteUri}/${path}`)
        .subscribe((response) => {
          this.networkCallService.endCall();
          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            if (reject) {
              reject(response.errors[0].message);
            }
          }
        },
          (err) => {
            this.networkCallService.endCall();
            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }

  post<TModel, TResponse>(path: string, model: TModel): Promise<Core.InvokeResultEx<TResponse>> {
    return this.postWithResponse(path, model);
  }

  insert<TModel>(path: string, model: TModel): Promise<Core.InvokeResult> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {
      this.http.post<Core.InvokeResult>(`${environment.siteUri}/${path}`, model)
        .subscribe((response) => {
          this.networkCallService.endCall();
          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            if (reject) {
              reject(response.errors[0].message);
            }
          }
        },
          (err) => {
            this.networkCallService.endCall();
            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }


  postWithResponse<TModel, TResponse>(path: string, model: TModel): Promise<Core.InvokeResultEx<TResponse>> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.InvokeResultEx<TResponse>>((resolve, reject) => {
      this.http.post<Core.InvokeResultEx<TResponse>>(`${environment.siteUri}/${path}`, model)
        .subscribe((response) => {
          this.networkCallService.endCall();
          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            if (reject) {
              reject(response.errors[0].message);
            }
          }
        },
          (err) => {
            this.networkCallService.endCall();
            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }

  postForListResponse<TModel, TResponse>(path: string, model: TModel): Promise<Core.ListResponse<TResponse>> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.ListResponse<TResponse>>((resolve, reject) => {
      this.http.post<Core.ListResponse<TResponse>>(`${environment.siteUri}/${path}`, model)
        .subscribe((response) => {
          this.networkCallService.endCall();
          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            if (reject) {
              reject(response.errors[0].message);
            }
          }
        },
          (err) => {
            this.networkCallService.endCall();
            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }

  updateWithResponse<TModel, TResponse>(path: string, model: TModel): Promise<Core.InvokeResultEx<TResponse>> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.InvokeResultEx<TResponse>>((resolve, reject) => {
      this.http.put<Core.InvokeResultEx<TResponse>>(`${environment.siteUri}/${path}`, model)
        .subscribe((response) => {
          this.networkCallService.endCall();
          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            if (reject) {
              reject(response.errors[0].message);
            }
          }
        },
          (err) => {
            this.networkCallService.endCall();

            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }


  update<TModel>(path: string, model: TModel): Promise<Core.InvokeResult> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {
      this.http.put<Core.InvokeResult>(`${environment.siteUri}/${path}`, model)
        .subscribe((response) => {
          this.networkCallService.endCall();

          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            if (reject) {
              reject(response.errors[0].message);
            }
          }
        },
          (err) => {
            this.networkCallService.endCall();

            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }

  delete<TModel>(path: string): Promise<Core.InvokeResult> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {
      this.http.delete<Core.InvokeResult>(`${environment.siteUri}/${path}`)
        .subscribe((response) => {
          this.networkCallService.endCall();

          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            reject(response.errors[0].message);
          }
        },
          (err) => {
            this.networkCallService.endCall();

            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }

  deleteWithResponse<TResponse>(path: string): Promise<Core.InvokeResultEx<TResponse>> {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    this.networkCallService.beginCall();

    const promise = new Promise<Core.InvokeResultEx<TResponse>>((resolve, reject) => {
      this.http.delete<Core.InvokeResultEx<TResponse>>(`${environment.siteUri}/${path}`)
        .subscribe((response) => {
          this.networkCallService.endCall();

          if (response.successful) {
            resolve(response);
          } else {
            this.errorReporter.addErrors(response.errors);
            reject(response.errors[0].message);
          }
        },
          (err) => {
            this.networkCallService.endCall();

            this.errorReporter.addMessage(err.message);
            if (reject) {
              reject(err.message);
            }
          });
    });

    return promise;
  }

}
