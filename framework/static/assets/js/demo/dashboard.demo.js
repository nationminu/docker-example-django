/*
Template Name: Droplet - Responsive Bootstrap 5 Admin Template
Version: 2.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/droplet/
*/

var handleRenderChart = function() {
	// global apexchart settings
	Apex = {
		title: {
			style: {
				fontSize: '14px',
				fontWeight: '600',
				fontFamily: app.font.bodyFontFamily,
				color: app.color.bodyColor
			}
		},
		legend: {
			fontFamily: app.font.bodyFontFamily,
			labels: { colors: app.color.bodyColor }
		},
		tooltip: {
			style: {
        fontSize: '12px',
        fontFamily: app.font.bodyFontFamily
      }
		},
		grid: { borderColor: app.color.borderColor },
		dataLabels: {
			style: {
				fontSize: '12px',
				fontFamily: app.font.bodyFontFamily,
				fontWeight: '600',
				colors: undefined
  		}
		},
		xaxis: {
			axisBorder: {
				show: true,
				color: app.color.borderColor,
				height: 1,
				width: '100%',
				offsetX: 0,
				offsetY: -1
			},
			axisTicks: {
				show: true,
				borderType: 'solid',
				color: app.color.borderColor,
				height: 6,
				offsetX: 0,
				offsetY: 0
			},
      labels: {
				style: {
					colors: app.color.bodyColor,
					fontSize: '12px',
					fontFamily: app.font.bodyFontFamily,
					fontWeight: app.font.bodyFontWeight,
					cssClass: 'apexcharts-xaxis-label',
				}
			}
		},
		yaxis: {
      labels: {
				style: {
					colors: app.color.bodyColor,
					fontSize: '12px',
					fontFamily: app.font.bodyFontFamily,
					fontWeight: app.font.bodyFontWeight,
					cssClass: 'apexcharts-xaxis-label',
				}
			}
		}
	};
  
	var chartOptions = {
		chart: {
			type: 'line',
			height: 300,
      toolbar: {
        show: false
      },
      margin: {
				bottom: 0,
				left: -50
			}
		},
    stroke: { width: 3, curve: 'smooth' },
		series: [
			{
				name: 'Sales',
				data: [
					{x: '12am', y: 500},
					{x: '1am', y: 450},
					{x: '2am', y: 400},
					{x: '3am', y: 375},
					{x: '4am', y: 325},
					{x: '5am', y: 350},
					{x: '6am', y: 325},
					{x: '7am', y: 300},
					{x: '8am', y: 400},
					{x: '9am', y: 450},
					{x: '10am', y: 550},
					{x: '11am', y: 500},
					{x: '12pm', y: 550},
					{x: '1pm', y: 600},
					{x: '2pm', y: 700},
					{x: '3pm', y: 750},
					{x: '4pm', y: 700},
					{x: '5pm', y: 650},
					{x: '6pm', y: 700},
					{x: '7pm', y: 800},
					{x: '8pm', y: 850},
					{x: '9pm', y: 900},
					{x: '10pm', y: 950},
					{x: '11pm', y: 1000}
				]
			}
		],
		yaxis: { offsetX: 0 },
		xaxis: {
			type: 'category',
			tickAmount: 8,
			labels: { rotate: 0, hideOverlappingLabels: true },
			offsetY: 0
		}
	};
  var chart = new ApexCharts(
    document.querySelector('#chart'),
    chartOptions
  );
	chart.render();
};

var handleRenderMap = function() {
	var gdpData = { 'AF': 16.63, 'AL': 11.58, 'DZ': 158.97, 'AO': 85.81, 'AG': 1.1, 'AR': 351.02, 'AM': 8.83, 'AU': 1219.72, 'AT': 366.26, 'AZ': 52.17, 'BS': 7.54, 'BH': 21.73, 'BD': 105.4, 'BB': 3.96, 'BY': 52.89, 'BE': 461.33, 'BZ': 1.43, 'BJ': 6.49, 'BT': 1.4, 'BO': 19.18, 'BA': 16.2, 'BW': 12.5, 'BR': 2023.53, 'BN': 11.96, 'BG': 44.84, 'BF': 8.67, 'BI': 1.47, 'KH': 11.36, 'CM': 21.88, 'CA': 1563.66, 'CV': 1.57, 'CF': 2.11, 'TD': 7.59, 'CL': 199.18, 'CN': 5745.13, 'CO': 283.11, 'KM': 0.56, 'CD': 12.6, 'CG': 11.88, 'CR': 35.02, 'CI': 22.38, 'HR': 59.92, 'CY': 22.75, 'CZ': 195.23, 'DK': 304.56, 'DJ': 1.14, 'DM': 0.38, 'DO': 50.87, 'EC': 61.49, 'EG': 216.83, 'SV': 21.8, 'GQ': 14.55, 'ER': 2.25, 'EE': 19.22, 'ET': 30.94, 'FJ': 3.15, 'FI': 231.98, 'FR': 2555.44, 'GA': 12.56, 'GM': 1.04, 'GE': 11.23, 'DE': 3305.9, 'GH': 18.06, 'GR': 305.01, 'GD': 0.65, 'GT': 40.77, 'GN': 4.34, 'GW': 0.83, 'GY': 2.2, 'HT': 6.5, 'HN': 15.34, 'HK': 226.49, 'HU': 132.28, 'IS': 12.77, 'IN': 1430.02, 'ID': 695.06, 'IR': 337.9, 'IQ': 84.14, 'IE': 204.14, 'IL': 201.25, 'IT': 2036.69, 'JM': 13.74, 'JP': 5390.9, 'JO': 27.13, 'KZ': 129.76, 'KE': 32.42, 'KI': 0.15, 'KR': 986.26, 'UNDEFINED': 5.73, 'KW': 117.32, 'KG': 4.44, 'LA': 6.34, 'LV': 23.39, 'LB': 39.15, 'LS': 1.8, 'LR': 0.98, 'LY': 77.91, 'LT': 35.73, 'LU': 52.43, 'MK': 9.58, 'MG': 8.33, 'MW': 5.04, 'MY': 218.95, 'MV': 1.43, 'ML': 9.08, 'MT': 7.8, 'MR': 3.49, 'MU': 9.43, 'MX': 1004.04, 'MD': 5.36, 'MN': 5.81, 'ME': 3.88, 'MA': 91.7, 'MZ': 10.21, 'MM': 35.65, 'NA': 11.45, 'NP': 15.11, 'NL': 770.31, 'NZ': 138, 'NI': 6.38, 'NE': 5.6, 'NG': 206.66, 'NO': 413.51, 'OM': 53.78, 'PK': 174.79, 'PA': 27.2, 'PG': 8.81, 'PY': 17.17, 'PE': 153.55, 'PH': 189.06, 'PL': 438.88, 'PT': 223.7, 'QA': 126.52, 'RO': 158.39, 'RU': 1476.91, 'RW': 5.69, 'WS': 0.55, 'ST': 0.19, 'SA': 434.44, 'SN': 12.66, 'RS': 38.92, 'SC': 0.92, 'SL': 1.9, 'SG': 217.38, 'SK': 86.26, 'SI': 46.44, 'SB': 0.67, 'ZA': 354.41, 'ES': 1374.78, 'LK': 48.24, 'KN': 0.56, 'LC': 1, 'VC': 0.58, 'SD': 65.93, 'SR': 3.3, 'SZ': 3.17, 'SE': 444.59, 'CH': 522.44, 'SY': 59.63, 'TW': 426.98, 'TJ': 5.58, 'TZ': 22.43, 'TH': 312.61, 'TL': 0.62, 'TG': 3.07, 'TO': 0.3, 'TT': 21.2, 'TN': 43.86, 'TR': 729.05, 'TM': 0, 'UG': 17.12, 'UA': 136.56, 'AE': 239.65, 'GB': 2258.57, 'US': 14624.18, 'UY': 40.71, 'UZ': 37.72, 'VU': 0.72, 'VE': 285.21, 'VN': 101.99, 'YE': 30.02, 'ZM': 15.69, 'ZW': 5.57};
	$('#map').vectorMap({
		map: 'world_mill',
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.5,
		hoverColor: false,
		zoomOnScroll: false,
		series: {
			regions: [{
				normalizeFunction: 'polynomial'
			}]
		},
		focusOn: {
			x: 0.5,
			y: 0.5,
			scale: 1
		},
		markerStyle: {
			initial: {
				fill: app.color.theme,
				stroke: 'none',
				'stroke-width': 2,
			}
		},
		regionStyle: {
			initial: {
				fill: app.color.bodyColor,
				'fill-opacity': 0.25,
				stroke: 'none',
				'stroke-width': 0.4,
				'stroke-opacity': 1
			},
			hover: {
				'fill-opacity': 0.5
			}
		},
		backgroundColor: 'transparent',
		markers: [
			{latLng: [41.90, 12.45], name: 'Vatican City'},
			{latLng: [43.73, 7.41], name: 'Monaco'},
			{latLng: [-0.52, 166.93], name: 'Nauru'},
			{latLng: [-8.51, 179.21], name: 'Tuvalu'},
			{latLng: [43.93, 12.46], name: 'San Marino'},
			{latLng: [47.14, 9.52], name: 'Liechtenstein'},
			{latLng: [7.11, 171.06], name: 'Marshall Islands'},
			{latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
			{latLng: [3.2, 73.22], name: 'Maldives'},
			{latLng: [35.88, 14.5], name: 'Malta'},
			{latLng: [12.05, -61.75], name: 'Grenada'},
			{latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
			{latLng: [13.16, -59.55], name: 'Barbados'},
			{latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
			{latLng: [-4.61, 55.45], name: 'Seychelles'},
			{latLng: [7.35, 134.46], name: 'Palau'},
			{latLng: [42.5, 1.51], name: 'Andorra'},
			{latLng: [14.01, -60.98], name: 'Saint Lucia'},
			{latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
			{latLng: [1.3, 103.8], name: 'Singapore'},
			{latLng: [1.46, 173.03], name: 'Kiribati'},
			{latLng: [-21.13, -175.2], name: 'Tonga'},
			{latLng: [15.3, -61.38], name: 'Dominica'},
			{latLng: [-20.2, 57.5], name: 'Mauritius'},
			{latLng: [26.02, 50.55], name: 'Bahrain'},
			{latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
		]
	});
}

var handleDateRangeFilter = function() {
	$('#daterange-filter span').html(moment().subtract(7, 'days').format('D MMM YYYY') + ' - ' + moment().format('D MMM YYYY'));
	
	$('#daterange-filter').daterangepicker({
		format: 'MM/DD/YYYY',
		startDate: moment().subtract(7, 'days'),
		endDate: moment(),
		minDate: '01/06/2024',
		maxDate: '07/06/2024',
		dateLimit: { days: 60 },
		showDropdowns: true,
		showWeekNumbers: true,
		timePicker: false,
		timePickerIncrement: 1,
		timePicker12Hour: true,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		opens: 'right',
		drops: 'down',
		buttonClasses: ['btn', 'btn-sm'],
		applyClass: 'btn-primary',
		cancelClass: 'btn-default',
		separator: ' to ',
		locale: {
			applyLabel: 'Submit',
			cancelLabel: 'Cancel',
			fromLabel: 'From',
			toLabel: 'To',
			customRangeLabel: 'Custom',
			daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
			monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			firstDay: 1
		}
	}, function(start, end, label) {
		$('#daterange-filter span').html(start.format('D MMM YYYY') + ' - ' + end.format('D MMM YYYY'));
	});
};

/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderChart();
	handleRenderMap();
	handleDateRangeFilter();
	
	document.addEventListener('theme-reload', function() {
		$('#chart, #map').empty();
		handleRenderChart();
		handleRenderMap();
	});
});