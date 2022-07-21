import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import fetchpatientreqaccept from "../../../../src/redux/apis/fetchpatientreqaccept";
import { patientReqAcceptActions } from "../../../../src/redux/actions/patient/patientReqAcceptActions";
import { reqAcceptwatcherSaga, reqAcceptSaga } from "../../../../src/redux/sagas/patient/patientReqAcceptSaga";

const initialData = {}
describe("test reqAcceptwatcherSaga", () => {
  const result = reqAcceptwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(patientReqAcceptActions.acceptPatientReq, reqAcceptSaga)
    )
  })
  it("should be done on next iteration", () => {
    expect(result.next().done).toBeTruthy();
  });
})
describe("testing loginSaga", () => {
  const response = {
    data: "1"
  }
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(fetchpatientreqaccept, "notifypatient").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqAcceptSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [patientReqAcceptActions.acceptPatientReqSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(fetchpatientreqaccept, "notifypatient").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqAcceptSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [patientReqAcceptActions.acceptPatientReqError(undefined)]
    );
    generator.mockClear();
  })
})