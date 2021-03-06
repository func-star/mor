import Index from 'views/index'
import Hammer from 'views/hammer'
import MountRoot from 'views/mount-root'
import Toast from 'views/toast'
import Modal from 'views/modal'
import PickerView from 'views/picker-view'
import Popup from 'views/popup'
import Layout from 'views/layout'
import ModalSelect from 'views/modal-select'
import PickerSelect from 'views/picker-select'
import DatePicker from 'views/date-picker'
import DatePickerRange from 'views/date-picker-range'
import ListView from 'views/list-view'
import Swiper from 'views/swiper'
import Tabs from 'views/tabs'
import Loading from 'views/loading'

export default {
	index: 'index',
	routes: {
		'404': Index,
		'index': Index,
		'hammer': Hammer,
		'mount-root': MountRoot,
		'toast': Toast,
		'modal': Modal,
		'picker-view': PickerView,
		'popup': Popup,
		'layout': Layout,
		'modal-select': ModalSelect,
		'date-picker': DatePicker,
		'date-picker-range': DatePickerRange,
		'picker-select': PickerSelect,
		'list-view': ListView,
		'swiper': Swiper,
		'tabs': Tabs,
		'loading': Loading
	}
}
