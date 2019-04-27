<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号:" prop="uname" >
    <el-input v-model="ruleForm.uname"></el-input>
  </el-form-item>
   <el-form-item label="密码:" prop="upwd">
    <el-input v-model="ruleForm.upwd" type="password"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          "uname":"admin",
          "upwd":"123456"
        },
        rules: {
          name: [
            { message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            
              this.$axios({
               url:'http://localhost:8899/admin/account/login',
               method:'POST',
               data:this.ruleForm,
               withCredentials: true

             }).then(res=>{
                  console.log(res);
                  const {status,message}=res.data;
                  if(status===0){
                      this.$router.push('/admin')
                  }else{
                      this.$message.error('账户或密码错误');
                  }
             })           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
.el-form {

    position: absolute;
    width: 400px;
    top:30%;
    left: 50%;
    margin-left: -240px;    
}
.el-button:nth-of-type(1){
  margin-left: 10px;
  margin-right: 120px;
}
   
</style>

