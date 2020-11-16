import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    Scrollbar,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Loading,
    MessageBox,
    Message,
    CheckboxButton,
    Transfer,
    Avatar
} from 'element-ui'
const element = {
    install: function (Vue) {
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(OptionGroup)
        Vue.use(Input)
        Vue.use(InputNumber)
        Vue.use(Radio)
        Vue.use(Dialog)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Checkbox)
        Vue.use(CheckboxButton)
        Vue.use(CheckboxGroup)
        Vue.use(DatePicker)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Button)
        Vue.use(Pagination)
        Vue.use(Loading)
        Vue.use(Menu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(TabPane)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.prototype.$message = Message;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$notify = Notification;
        Vue.prototype.$httpLoading = {
            show: function () {
                Loading.service({
                    lock: true,
                    text: "加载中...",
                    spinner: "el-icon-loading",
                    background: "rgba(0, 0, 0, 0.7)"
                });
            },
            close: function () {
                let loadingInstance = Loading.service({
                    lock: true,
                    text: "加载中...",
                    spinner: "el-icon-loading",
                    background: "rgba(0, 0, 0, 0.7)"
                });
                loadingInstance.close();
            }
        };
    }
}



export default element