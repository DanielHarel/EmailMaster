"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SurveyList_1 = __importDefault(require("./surveys/SurveyList"));
var core_1 = require("@material-ui/core");
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        mainContainer: {
            backgroundColor: '#bedcfa',
            height: '100%'
        },
        surveyItems: {
            width: '75%'
        }
    });
});
var Dashboard = function () {
    // functional component that shows the list of seurveys the user created and a button to create a new survey
    var classes = useStyles();
    return (react_1.default.createElement(core_1.Grid, { container: true, direction: 'column', className: classes.mainContainer },
        react_1.default.createElement(core_1.Grid, { item: true, container: true, justify: 'center' },
            react_1.default.createElement(core_1.Grid, { item: true, className: classes.surveyItems },
                react_1.default.createElement(SurveyList_1.default, null))),
        react_1.default.createElement(core_1.Fab, { color: 'primary', component: 'button', href: '/surveys/new', style: { position: 'fixed', right: 20, bottom: 20 } },
            react_1.default.createElement(Add_1.default, null)))
    // <div>
    //     <SurveyList/>
    //     <div className="fixed-action-btn">
    //         <Link to='/surveys/new' className="btn-floating btn-large red">
    //             <i className="material-icons">add</i>
    //         </Link>
    //     </div>
    // </div>
    );
};
exports.default = Dashboard;
