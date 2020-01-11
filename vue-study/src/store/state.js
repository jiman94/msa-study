export default {
    loadingState: false,
    pageLoading: false,
    snackbarInfo: {
        open: false,
        text: '',
    },
    modal: {
        open: false,
        title: '',
        content: '',
        option: '',
    },
    articleUrl: '',
    pageInfo: '',
    boardList: [],
    accessToken: localStorage.getItem('access_token'),
    // ============ Rules ============ //
    emailRules: [
        v => !!v || '이메일을 작성해주세요.',
        v => /.+@.+\..+/.test(v) || '이메일 형식으로 작성해주세요.',
        v => v.search(/\s/) === -1 || '공백을 제거해주세요!'
    ],
    nameRules: [
        v => !!v || '이름을 작성해주세요.',
        v => v.search(/\s/) === -1 || '공백을 제거해주세요!'
    ],
    passwordRules: [
        v => !!v || '비밀번호를 작성해주세요',
        v => v.search(/\s/) === -1 || '공백을 제거해주세요!'
    ],
}