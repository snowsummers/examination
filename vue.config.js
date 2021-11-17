module.exports = {
    configureWebpack: {
        resolve: {
            // extensions: [],
            alias: {
                // "@": '/src',
                // "assets": '/src/assets',
                "assets": '@/assets',
                "common": '@/common',
                "components": '@/components',
                "network": '@/network',
                "store": "@/store",
                "views": "@/views",
                "bus": "@/bus",
            }
        }
    }
}