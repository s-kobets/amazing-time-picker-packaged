import { OnInit } from '@angular/core';
import { IClockNumber, IDisplayPreference, ITime, TimePickerConfig } from '../definitions';
import { AtpCoreService } from '../atp-core.service';
export declare class TimePickerComponent implements OnInit {
    private core;
    _ref: any;
    subject: any;
    activeModal: boolean;
    timerElement: any;
    clockObject: Array<any>;
    isClicked: boolean;
    clockType: 'minute' | 'hour';
    time: ITime;
    nowTime: any;
    degree: any;
    config: TimePickerConfig;
    appRef: any;
    isPopup: boolean;
    allowed: any;
    preference: IDisplayPreference;
    changeToMin: boolean;
    smallArrow: boolean;
    private rayon;
    private animationTime;
    constructor(core: AtpCoreService);
    ParseStringToTime(time: string): void;
    GetTime(): void;
    clockMaker: () => void;
    setActiveTime: () => void;
    setArrow: (obj: any) => void;
    rotationClass: (degrees: any) => void;
    setTime(): void;
    getDegree: (ele: any) => void;
    checkBet(): void;
    /**
     * Check if clock button time is not in allowed times and disabled
     * @param t Button Time Value
     */
    checkDisabled(t: any): boolean;
    modalAnimation(): void;
    ngOnInit(): void;
    MinuteClick(): boolean;
    HourClick(): boolean;
    ChangeAnimational(type: 'minute' | 'hour'): void;
    SetAM(): boolean;
    SetPM(): boolean;
    Close(e: any): void;
    getClockArrowStyle(): {};
    getAnimationTime(): string;
    /**
     * Event on clock mouse click down
     * @param event - captured event
     */
    updateClockDown(event: any): void;
    GetSeparator(): string;
    GetPeriod(period: 'AM' | 'PM'): any;
    GetMinute(): any;
    GetHour(): any;
    GetClockTime(clock: IClockNumber): any;
    GetLabel(key: string): any;
    private GetNowTime(hour, ampm, minute);
}
