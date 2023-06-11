<template>
  <section>
    <section class="about_us">
      <div class="container">
        <div class="columns is-multiline is-mobile mt-2">
          <div class="column is-6-desktop is-12-mobile is-6-tablet">
            <div class="card about_us_card">
              <div class="card-content">
                <div class="columns is-multiline is-mobile">
<form :on-submit="postData()" method="post">

                  <div class="column is-10-desktop is-12-mobile is-6-tablet">
                    <p class="head-text">
                      Please Upload the xis file that contains date of your
                      employees
                    </p>
                    <div
                      class="field column is-3-desktop is-12-mobile is-4-tablet"
                    >
                      <div class="control columns">
                        <div class="file is-boxed is-default">
                          <label class="file-label">
                            <input
                              type="hidden"
                              data-vv-as="Front Image"
                              name="foregroundimagepreview"
                              id="foregroundimagepreview"
                            />
                            <b-upload
                            type="file"
                              id="file"
                              name="file"
                              v-model="upload.file"
                            ></b-upload>
                            <span class="file-cta">
                              <span class="file-label">Upload File</span>
                            </span>
                          </label>
                        </div>
                        <div class="uploadedimage">
                         
                        </div>
                      </div>
                    
                    </div>
                    {{ upload &&upload.file ? upload.file.name :""}}
                    <a>
                            <i class="lnil lnil-close"></i>
                          </a>
                    <p class="or">
                      --------------------------OR--------------------------
                    </p>
                    <!-- <p class="head-text1">Import from URL</p> -->
                    <div class="search-container">
                      <b-field label="Import from URL">
                        <b-input
                          type="text"
                          class="search-input"
                          placeholder="Enter URL"
                        ></b-input>
                      </b-field>
                      <button class="search-button is-right">Upload</button>
                    </div>
                    <div class="end-button">
                      <div>
                        <button class="cance-button">Cancel</button>
                        <button class="predict-button" >Predict</button>
                      </div>
                    </div>
                  </div>
</form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
// import baseUrl from '~/plugins/baseUrl'
import { $axios } from '@nuxtjs/axios'

export default {
  data() {
    return {
     upload:{
      file: null,
     }
    };

  },
  methods: {
    async postData() {
      console.log("inside");
      try {
        const response = await this.$axios.$post(
          'http://127.0.0.1:5001/upload',
          )
        console.log(response.data,'response.data')
      } catch (error) {
        console.error(error,"error")
      }
    }
  }
  
};



</script>

<style scoped>
.column.is-6-desktop {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  width: 80%;
  border-left: 67px;
  padding-left: 240px;
  align-content: center;
}
.column.is-10-desktop {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  width: 80;
  padding-top: 0px;
  height: 420px;
}
.card-content {
  background-color: white;
  border: 3px #000;
  display: flex;
  padding: 1.5rem;
}
.head-text {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  padding-left: 5px;
  padding-bottom: 30px;
}
.file.is-boxed .file-cta {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: auto;
  padding: 3em 17em;
}
.file-cta {
  background-color: azure;
}
.file-cta,
.file-name {
  border-color: blue;
  border-radius: 20px;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;
}
.or {
  color: gray;
  font-size: 15px;
  padding: 10px;
  padding-left: 90px;
}
.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  margin-right: 10px;
  padding: 5px;
  width: 550px;
}

.search-button {
  padding: 18px 13px 6px;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
}
.label {
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 600;
  padding: 10px;
}
.cancel-button {
  padding: 18px 13px 6px;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
}
.end-button {
  padding-left: 250px;
  padding-top: 15px;
}
.predict-button {
  padding: 8px 9px 6px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: medium;
  padding-left: 5px;
}
.cance-button {
  padding: 8px 9px 6px;
  background-color: transparent;
  color: black;
  font-size: medium;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid gray;
}
</style>
