module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/d4d334b1301d4a06864c0ed7f274bec8?v=eab82b72f056437a8bc859014cb46808"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/02927654e2c54293bee07c9ea59ec154?v=b117e4f6898a442c82293a255df6b611"
            }
        }
    ],
}
