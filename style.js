const { createApp } = Vue

createApp({
    data() {
        return {
            headers: ["分級", "身體質量指數 (BMI) (kg/m2)"],
            datas: [
                { id: 0, grade: "過輕", BMI: "BMI ＜ 18.5" },
                { id: 1, grade: "正常	", BMI: "18.5 ≦ BMI ＜ 24.0" },
                { id: 2, grade: "過重", BMI: "24.0 ≦ BMI ＜ 27.0" },
                { id: 3, grade: "肥胖", BMI: "BMI ≧ 27.0" },
            ],
            height: '',
            weight: ''
        }
    },
    computed: {
        BMI() {
            if (this.weight.length == 0 || this.height.length == 0)
                return ""
            else
                return (this.weight / ((this.height / 100) * this.height / 100)).toFixed(1)
        },
    }
}).mount('#app')