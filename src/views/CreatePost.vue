<template>
    <div class="create-post">
        <div class="container">
            <div :class="{invisible: !error}" class="err-message">
                <p><span>Error:{{this.errorMsg}}</span></p>
            </div>
            <div class="blog-info">
                <input type="text" placeholder="Enter Blog Title" v-model="blogTitle">
                <div class="upload-file">
                    <label for="blog-photo">Upload Cover Photo</label>
                    <input type="file" name="" id="">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/ImageResize", ImageResize);
export default {
    name: "CreatePost",
    data() {
        return {
            error: null,
            errorMsg: null,
            editorSettings: {
                modules: {
                    ImageResize: {},
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>

</style>