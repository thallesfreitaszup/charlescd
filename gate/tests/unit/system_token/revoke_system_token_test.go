package system_token

import (
	"github.com/ZupIT/charlescd/gate/internal/domain"
	"github.com/ZupIT/charlescd/gate/internal/logging"
	"github.com/ZupIT/charlescd/gate/tests/unit/utils"
	"github.com/google/uuid"
	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/require"
)

func (st *SystemTokenSuite) TestRevokeSystemToken() {
	systemToken := utils.GetDummySystemToken()

	st.systemTokenRepository.On("FindById", systemToken.ID).Return(systemToken, nil).Once()
	st.systemTokenRepository.On("Update", mock.AnythingOfType("domain.SystemToken")).Return(nil).Once()

	err := st.revokeSystemToken.Execute(systemToken.ID)

	require.Nil(st.T(), err)

	require.Equal(st.T(), 2, len(st.systemTokenRepository.ExpectedCalls))
	require.True(st.T(), st.systemTokenRepository.AssertCalled(st.T(), "FindById", systemToken.ID))
	require.True(st.T(), st.systemTokenRepository.AssertCalled(st.T(), "Update", mock.AnythingOfType("domain.SystemToken")))

	updatedSystemToken := st.systemTokenRepository.Calls[1].Parent.Calls[1].Arguments.Get(0).(domain.SystemToken)
	require.NotNil(st.T(), updatedSystemToken)
	require.True(st.T(), updatedSystemToken.Revoked)
	require.NotNil(st.T(), updatedSystemToken.RevokedAt)
}

func (st *SystemTokenSuite) TestRevokeSystemTokenIDNotFound() {
	uuid := uuid.New()
	st.systemTokenRepository.On("FindById", uuid).
		Return(domain.SystemToken{}, logging.NewError("Not found error", logging.CustomError{}, logging.NotFoundError, nil)).Once()

	err := st.revokeSystemToken.Execute(uuid)

	require.Error(st.T(), err)
	require.Equal(st.T(), logging.NotFoundError, logging.GetErrorType(err))

	require.Equal(st.T(), 1, len(st.systemTokenRepository.ExpectedCalls))
	require.True(st.T(), st.systemTokenRepository.AssertCalled(st.T(), "FindById", uuid))
}

func (st *SystemTokenSuite) TestRevokeSystemTokenErrorWhenUpdating() {
	systemToken := utils.GetDummySystemToken()

	st.systemTokenRepository.On("FindById", systemToken.ID).Return(systemToken, nil).Once()
	st.systemTokenRepository.On("Update", mock.AnythingOfType("domain.SystemToken")).
		Return(logging.NewError("Not found error", logging.CustomError{}, logging.NotFoundError, nil)).Once()

	err := st.revokeSystemToken.Execute(systemToken.ID)

	require.Error(st.T(), err)
	require.Equal(st.T(), logging.NotFoundError, logging.GetErrorType(err))

	require.Equal(st.T(), 2, len(st.systemTokenRepository.ExpectedCalls))
	require.True(st.T(), st.systemTokenRepository.AssertCalled(st.T(), "FindById", systemToken.ID))
	require.True(st.T(), st.systemTokenRepository.AssertCalled(st.T(), "Update", mock.AnythingOfType("domain.SystemToken")))
}

func (st *SystemTokenSuite) TestRevokeSystemTokenOkIfTokenIsAlreadyRevoked() {
	systemToken := utils.GetDummySystemToken()
	systemToken.Revoked = true

	st.systemTokenRepository.On("FindById", systemToken.ID).Return(systemToken, nil).Once()

	err := st.revokeSystemToken.Execute(systemToken.ID)

	require.Error(st.T(), err)
	require.Equal(st.T(), logging.BusinessError, logging.GetErrorType(err))

	require.Equal(st.T(), 1, len(st.systemTokenRepository.ExpectedCalls))
	require.True(st.T(), st.systemTokenRepository.AssertCalled(st.T(), "FindById", systemToken.ID))
}
