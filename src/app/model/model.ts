export class Car {
  id: number;
  registration: string;
  driverType: DriverType;

  constructor(id: number, registration: string, driverType: DriverType) {
    this.id = id;
    this.registration = registration;
    this.driverType = driverType;
  }
}

export class ParkingSpace {
  id: number;
  name: string;
  meterOn: boolean;
  isChangingMeter: string;
  parkingSessions: ParkingSession[];

  constructor(id: number, name: string, meterOn: boolean, parkingSessions: ParkingSession[]) {
    this.id = id;
    this.name = name;
    this.meterOn = meterOn;
    this.parkingSessions = parkingSessions;
  }
}

export class ParkingSession {
  id: number;
  parkingSpace: ParkingSpace;
  carRegistration: string;
  tariff: DriverType;
  startTime: Date;
  endTime: Date;
  finished: boolean;

  constructor(id: number,
              parkingSpace: ParkingSpace,
              carRegistration: string,
              tariff: DriverType,
              startTime: Date,
              endTime: Date,
              finished: boolean) {
    this.id = id;
    this.parkingSpace = parkingSpace;
    this.carRegistration = carRegistration;
    this.tariff = tariff;
    this.startTime = startTime;
    this.endTime = endTime;
    this.finished = finished;
  }
}

enum DriverType {
  REGULAR,
  DISABLED
}
