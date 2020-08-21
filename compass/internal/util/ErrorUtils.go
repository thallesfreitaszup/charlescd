package util

import (
	log "github.com/sirupsen/logrus"
	"time"
)

const (
	GeneralParseError = "PARSE_ERROR"
	PluginLookupError = "PLUGIN_LOOKUP_ERROR"
	ResultQueryError  = "RESULT_QUERY_ERROR"
)

const (
	DatasourceSaveError           = "DATASOURCE_SAVE_ERROR"
	VerifyDatasourceHealthError   = "VERIFY_HEALTH_ERROR"
	ExistingDatasourceHealthError = "EXISTING_HEALTHY_DATASOURCE_ERROR"
	FindDatasourceError           = "FIND_DATASOURCE_ERROR"
	FindDatasourceGetMetricsError = "FIND_DATASOURCE_GET_METRICS_ERROR"
	DeleteDatasourceError         = "DELETE_ERROR"
	OpenPluginGetMetricsError     = "OPEN_PLUGIN_GET_METRICS_ERROR"
	PluginListError               = "PLUGIN_LIST_ERROR"
)

const (
	SaveMetricError   = "SAVE_METRIC_ERROR"
	UpdateMetricError = "UPDATE_METRIC_ERROR"
	RemoveMetricError = "REMOVE_METRIC_ERROR"
)

const (
	PeriodValidateRegexError = "PERIOD_VALIDATE_REGEX_ERROR"
	PeriodValidateError      = "PERIOD_VALIDATE_ERROR"
	FindMetricsGroupError    = "FIND_METRICS_GROUP_ERROR"
	ResumeByCircleError      = "RESUME_BY_CIRCLE_ERROR"
	SaveMetricsGroupError    = "SAVE_METRICS_GROUP_ERROR"
	UpdateMetricsGroupError  = "UPDATE_METRICS_GROUP_ERROR"
	RemoveMetricsGroupError  = "REMOVE_METRICS_GROUP_ERROR"
	QueryFindDatasourceError = "QUERY_FIND_DATASOURCE_ERROR"
	QueryGetPluginError      = "QUERY_GET_PLUGIN_ERROR"
	QueryByGroupIdError      = "QUERY_BY_GROUP_ID_ERROR"
)

const (
	FindPluginError    = "FIND_PLUGIN_ERROR"
	GetPluginByIdError = "GET_PLUGIN_BY_ID_ERROR"
	UpdatePluginError  = "UPDATE_PLUGIN_ERROR"
	RemovePluginError  = "REMOVE_PLUGIN_ERROR"
)

const (
	ResultByGroupMetricError = "RESULT_BY_GROUP_METRIC_ERROR"
)

func Info(msg string, data interface{}) {
	infoLogger := log.WithFields(log.Fields{
		"Message": msg,
		"Data":    data,
	})
	log.Info(infoLogger)
}

func Error(msg string, functionName string, err error, data interface{}) {
	errorLogger := log.WithFields(log.Fields{
		"Message":      msg,
		"Error":        err,
		"FunctionName": functionName,
		"Data":         data,
	}).WithTime(time.Now())
	log.Error(errorLogger)
}
func Panic(msg string, functionName string, err error, data interface{}) {
	panicLogger := log.WithFields(log.Fields{
		"Message":      msg,
		"Error":        err,
		"FunctionName": functionName,
		"Data":         data,
	}).WithTime(time.Now())
	log.Panic(panicLogger)
}