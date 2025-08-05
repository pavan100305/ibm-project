
  const clothesData = [
      //hourglass bottom starts from here
    { name: 'Women Flared High-Rise Stretchable Jeans', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/YIJ2zHB2acIHPj1Os' ,img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxYvi3nbU4nvxhbeYS5WKRyqjuSg3PLsFXMy-5IvdZW1GKRkkSRZwrBsU8ICKZKDa3h_lFOkx8PPRyW_Q9tvOak2bdK4r-Dn6DwDUqYw8'},
    { name: 'Black Ultra High Rise Flare Jeans', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/6CIisskUKSkTx4AJe',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYXA1cPkq4OFyaQhQ5C9TqTUfYgFjHlck9AYTVxi2e70hGRPE4JgKphBJ_xXR3sDaEApQ-8zbmNel4NZcpijO8L6IAJGssKjsN64zvXVY' },
    { name: 'Flared High Jeans', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/BG96xVze2nTwNwFX4',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYb2l-Zemiy2qz1Rr_RTTL_RBJ9l3mF87JkC0oJ1T35V8Kb7kc9uzR6QJZSHdzMr5eSbJFEqSKmZGjYLbxmjx-Fbhl5N-vjkMu9tSjnYtYtyu8Wm17KbgT' },
    { name: 'The Life Co. Women Flared High-Rise Stretchable Jeans', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/DgIgQZBsHkXcxs7Bf',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpcanBsF60eblj21JWk5zyKiQXJ-QyK4UuEuHNqr7jM7iUS9Zue8fqiTVfI8Dvnv0qHh4UNWSRWZC6sPTKjPqFjm1NAET5vev-QA6LXVx9IrFyp-xp4cBBhg' },
    { name: ' Bootcut Jeans', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/VpbottomCCqnJbrjbP0r',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7FhG4-k-RBvjIUMqMtDMK22LPT1h1TaAiiz8swaglAvL2xvBZeCLKp5X70koqWGAqgkQwLj_nruJs-_xfuhD6rbx3hben9F5jtC3cDwk' },
    { name: 'Dark Blue High Rise Skinny Jeans', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/ZSkIvTRVvGcmdiSXY',img: 'https://freakins.com/cdn/shop/files/Aniwarya01525-Edit_54ec0cce-3005-4ec8-abfb-c6781cb95cad.jpg?v=1749908409&width=800' },
    //apple bottom starts from here
    { name: 'Women Straight Fit Jeans', type: 'bottom', bodyType: 'apple', link: 'https://share.google/jzUbQSc7KbhK2Koc8',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8YXqdj_aivla_GiGxRpGf__xcLLPHTu8gaPiceSBv2Wkrke2JFzwc5P3y59dSqz1ggPVB2eeka5y-SUusAjjzu5Hba8rx0xO1DxAnUMiz' },
    { name: 'Gen X Raw Mid Rise Straight Fit Jeans', type: 'bottom', bodyType: 'apple', link: 'https://share.google/BmZbqOtotakF8MrT8',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpcPZMEAja7QQ5Ml9jXY57xvolB398xywWujq-x6z0fBHSN86xc2jPc_dWFQy5D3o1wr5b-9yLbkBep43F4JJwfs7YY99fajiyUKuvLPk' },
    { name: 'Women Pure Cotton Wedgie Straight Fit High-Rise Light Fade Jeans', type: 'bottom', bodyType: 'apple', link: 'https://share.google/JzdX5xyKaeRFYWp5S',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYuTmaG7BR6KYz0lyBnF4SpyjckOOoQEsTsiBT2aURlaNn33ktU1PYS3jMtxRmcwOHTexQLOMCqE8CwbbyWlkJba1G3Bge-K4Tqd2EYh5Ny4Zet_XKqwYvzg' },
    { name: 'Women Straight Fit Mid-Rise Cotton Stretchable Jeans', type: 'bottom', bodyType: 'apple', link: 'https://share.google/3vM4bVBEeX3zswnbr',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6kVeRXIUlBUIbm265K-II1fqTxkvPArgJrRxGnzh-Bf3d0PifBzc3YfuwPthouU9E6Es42YphT6gO6H24U_81QSclThTTNyd0lkAy1E4' },
    { name: 'Women Blue Bootcut Mid Rise Jeans', type: 'bottom', bodyType: 'apple', link: 'https://www.nykaafashion.com/miss-chase-women-blue-bootcut-mid-rise-jeans/p/19330213',img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/b/1bf769dMCSS18DEN0219329_1.jpg?rnd=20200526195200&tr=w-1080' },
    { name: 'The Lifestyle Co Cotton Bootcut Mid-Rise Jeans', type: 'bottom', bodyType: 'apple', link: 'https://www.myntra.com/jeans/roadster/the-roadster-lifestyle-co-cotton-bootcut-mid-rise-jeans/33368407/buy',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2UNG5RsDNLlif5neu8Bm25Z1_DRFpCcouUdAITLw9idaBGcYedSbEvhhl9j97DUpUD9nqQUe316suy3a31JEdwdv1fRsiL-GDTO6VnO-0HLflSPgl&usqp=CAc' },
    //pear bottom starts from here
    { name: 'Women Light Blue Wide-Leg High-Rise Regular Stretchable Jeans', type: 'bottom', bodyType: 'pear', link: 'https://www.nykaafashion.com/miss-chase-women-light-blue-wide-leg-high-rise-regular-stretchable-jeans/p/19000964',img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/2/22c8f11DMISAA00018995_1.jpg?rnd=20200526195200&tr=w-1080' },
    { name: 'me Queen womens wide leg flare loose fit high rise blue denim jeans', type: 'bottom', bodyType: 'pear', link: 'https://mequeen.in/products/me-queen-womens-wide-leg-flare-loose-fit-high-rise-blue-denim-jeans',img: 'https://mequeen.in/cdn/shop/files/WhatsApp_Image_2025-01-10_at_2.30.31_PM_1.jpg?v=1736949480&width=493' },
    { name: 'Women Wide Leg Stretchable Jeans', type: 'bottom', bodyType: 'pear', link: 'https://www.myntra.com/jeans/dressberry/dressberry-women-wide-leg-stretchable-jeans/23886182/buy',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQHoboSK3VxbnK508uKIpfjYwWNqgxQkCUkSd6ohTrP_F5_sxC7QS1iOtCEtU_DhYtRfr_mvXmrh7K_jMvTpe5eLI8e8V-Pk7peE7CP5LgPp9Lc5hG_fO3ONPM&usqp=CAc' },
    { name: 'Shein Full Length High Rise Boyfriend Jeans', type: 'bottom', bodyType: 'pear', link: 'https://www.sheinindia.in/shein-shein-full-length-high-rise-boyfriend-jeans/p/443323656_ltblue#gmf?utm_source=google&utm_medium=cpc&utm_campaign=vib_shein_ggl_shopping-standard_may2025_female&utm_term=&utm_content=752371301759',img: 'https://assets.sheinindia.in/medias/shein_sys_master/root/20250611/zW2e/68495d0e55340d4b4f9fb4ad/-473Wx593H-443323656-ltblue-MODEL.jpg' },
    { name: 'Women Jean Boyfriend Fit High-Rise Stretchable Jeans', type: 'bottom', bodyType: 'pear', link: 'https://www.myntra.com/jeans/kashian/kashian-women-jean-boyfriend-fit-high-rise-stretchable-jeans/32559344/buy',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHj1NM1zk9b2LbxGwPeFRV35jNS8IsSgbZHUIw1WMOZsIsco1V2Nq5T7UMj-SzoHfMlMKwpgwJh_J1D38RzWIwQjYidAOiprOdgf5f89iZ7BZV6FTo26qv&usqp=CAc' },
    { name: 'Women Boyfriend Fit High-Rise Heavy Fade Jeans', type: 'bottom', bodyType: 'pear', link: 'https://www.myntra.com/jeans/baesd/baesd-women-boyfriend-fit-high-rise-heavy-fade-jeans/23988410/buy',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZfN50_uf1wQ6lq3hu3UC9VyleFd8TMSbmhhy0vTwQ97hpVK47TmbDO2tMiikMy67QBQUKaKZSZGRZTZOtZZRPcwb1VQ3I3a1PsGFfUT8REBDbR__t8VMmVtSj8dJ4Zk4AzTmcKQ&usqp=CAc' },
    // inverted triangle bottom starts here
    { name: 'Skinny High Jeans', type: 'bottom', bodyType: 'invertedtriangle', link: 'https://www2.hm.com/en_in/productpage.1207354012.html',img: 'https://image.hm.com/assets/hm/4d/26/4d2651bbb7b7aabdd25c25c8aecbbb9cfb776871.jpg?imwidth=1260' },
    { name: 'Womens Blue Skinny High Rise Distressed Regular Length Denim Jeans', type: 'bottom', bodyType: 'invertedtriangle', link: 'https://www.nykaafashion.com/miss-chase-blue-skinny-jeans-3/p/699485',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRScDBak4hbXgbk-uCkDc_B-SLjEu4bozvXpacATdD4ipWrOidpCUsEcHfDcXbPK5Y3SnvY_mHdoW1fYdXrgBT7H2xSHdhXdycM7vsIceWBwXqY03XG7a5S2tFzkXt0EQgjRDRqPpY1&usqp=CAc' },
    { name: 'The Lifestyle Co Skinny-Fit Stretchable Jeans', type: 'bottom', bodyType: 'invertedtriangle', link: 'https://www.myntra.com/jeans/roadster/the-roadster-lifestyle-co-skinny-fit-stretchable-jeans/30070877/buy',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROGhjLpS5QBKdzDQDWQlre-QNH0-o1lIHaHCsqkbKQQKA1I7DyqNPCIOieo77NgBlPAsN1J2pBRcdO6IpSDF-4roxfnQuxR3GFypnRH3WUpLr_8NDqZGFhqA&usqp=CAc' },
    { name: 'Women Mom Jeans', type: 'bottom', bodyType: 'invertedtriangle', link: 'https://share.google/aNIyxSGAmGheTSo3i',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcReG-Dt7u4Y_2q3DKgOJUGsxdp11Q7yhJGcilO-NGlNqpsYqi0uEc93wAm64t5GKHwtxfhRqtkf-MzBucq3vyAIYLitDdCLweCs7PGQBmdnUnG4BLj70kpU' },
    { name: 'Mom Loose Fit Ultra High Ankle Jeans', type: 'bottom', bodyType: 'invertedtriangle', link: 'https://share.google/H7yCGwCza6leWlfK5',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRO4HDG7f84dBqAydJU-B6J5EqJ6PPSnSOkJ1wbeiA_qQLZby5UJ8Kgs9SL-_cFL9D4dKJ5sZA2LZI5Sxi71mE3a1LkbUEmHAWaLxey5Yuq8yv8BLXD2oXp' },
    { name: 'The Mom Jeans', type: 'bottom', bodyType: 'invertedtriangle', link: 'https://share.google/pLafJkp59jZm2VJJb',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQPSlqYWPsU4Aozj3skQlvbfSX0KSx5af6HbIa4frdSyh5OYzlIQhaWOBWK8OyZyV4R5o1iG1Z1X9EiZi2tdDac8HeuGUshaEINfL6X1XCkXRNOgKBEzjXFvw' },
    //rectangle bottom skirts start here
    { name: 'Women Navy Blue Skinny Fit Mid-Rise Clean Look Stretchable Cropped Jeans', type: 'bottom', bodyType: 'rectangle', link: 'https://share.google/aUuNB1QaTxMfyiUHZ',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQXAn-J4PSM7seSLldsnCR2VtWjcwhIk5wHQbkrnC-EtwCRLMp3x7P-OnYTvnjtefTCX6klpbiwf2dJrDp_UfUoINenH3hptRVr7U60K9JwOSkijMVFzghRQ' },
    { name: 'Miss Chase Womens Black Cotton Skinny Fit Cropped High Rise Stretchable Denim Jeans', type: 'bottom', bodyType: 'rectangle', link: 'https://share.google/tNAqbSUUStYwyyGMd',img: 'https://images.meesho.com/images/products/472771395/8lao4_1200.jpg' },
    { name: 'Women Skinny Fit Mid-Rise Clean Look Stretchable Cropped Jeans', type: 'bottom', bodyType: 'rectangle', link: 'https://share.google/gbh1KqRXvObjZQ6aM',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQZGt0K5tYHpAkf0ztkfqe8ebp5Pvs_pmU0HW2UfweqnmwaBBuEWk_mggiUNjU-R3_T_HCPN0P3o6zPLJ0FalylOfwl2C0F5-lsuYxDQOA' },
    { name: 'Women Black Jean Flared High-Rise Low Distress Stretchable Jeans', type: 'bottom', bodyType: 'rectangle', link: 'https://share.google/F0U6Li55ONpj6gii2',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSN578xt8zSOsOMOQGI65t6SeHhDQpaQxn7NUakpvL7eLW8JSBTcucdgdAGUPzbxJQtS4024S6rWp6vL3yKYWraAAZaOId2MvJyg5YDLac6' },
    // inverted triangle skirts start here
    { name: 'Women Straight Maxi Skirt', type: 'bottom', bodyType: 'invertedtriangle', link: 'https://share.google/s0zrNf8JzTrhGTaUU',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtFserGkZGAf2JWialxkVw5vxCFVWubcds_YmXSAFC-677Skvztc1vI2o8I8918-wNhTJIJ5h0mnCZs5fP902kdsvtwbP_Rt5meowpdZ0' },
    { name: 'Straight Maxi Skirts', type: 'bottom', bodyType: 'invertedtriangle', link: 'https://share.google/6cEwMceoYnTRRXdAx',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRM5bpr6LhmeBNoEpSLzV4tLY7dx_YgLGt_Yz29CuVFQGrJpPaA87EPhEshFSkpL5UOINGw16lLY891A65CkAPe4dylaz53VNFGLF3_1SatCm1fnV4MElh4Aw' },
    // pear bottom skirts start here
    { name: 'Pure Cotton A-Line Above Knee Length Skirts', type: 'bottom', bodyType: 'pear', link: 'https://share.google/xvMp2iwJAJ0keDLTu',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRoTzOo1paopv2l8ep0y60qv82wlwI9lM2I3bZ7eqggngDZxTHwnylpyjcpxuK4rjF7NsWUCfvncM6v2bBGCRtnEFCazgdf_6Zfa4uNTPD' },
    { name: 'Satin Mini Tulip Draped Skirt', type: 'bottom', bodyType: 'pear', link: 'https://share.google/GvhGCe1APmwQ4BDyk',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWk6ectR6mYBwQZsj6hnM9Gs4POPv20mfzJ2FOyqXi1_wgDELsJSTiGSOZRTpSgkBfL-l3P4zqr1xcFrtWQbcEmzblD1gsuWnoV0CE5IPP' },
    { name: 'Accordion Pleated Maxi Flared Skirt', type: 'bottom', bodyType: 'pear', link: 'https://share.google/HNLXIrKREC67boSaq',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTeRWQyB3d0LbSXG_jzfhmRip6CL64l5q9DftyxjbUEy2e_teTxpEw8PU6mnRDcje1pBOWIb3iWZgAuk5nA9SmvG2obwWpJZczuheuTzeLY' },
    { name: 'Chiffon Pleated Mini Skater Skirt', type: 'bottom', bodyType: 'pear', link: 'https://share.google/ihKHyftNQH8WHKQxc',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLsSiCWuNZPGRfCro2urs1j3ndOV1YqTh31uIYmD41VbF2PnMI-nBu0zRaakh0DtmPUjc9ZcHacsI96t84Sqon7yNStTDCaVBJPg2CnKZQ' },
    { name: 'GORGLITTER Womens Ditsy Floral Print Ruffle Trim High Low Hem Split Thigh Boho Long Skirts', type: 'bottom', bodyType: 'pear', link: 'https://share.google/QiwYTXTCzz1VyoaTs',img: 'https://m.media-amazon.com/images/I/713jH4FYqWL.jpg' },
    //apple bottom skirts start here
    { name: 'Striped A-Line Midi Skirt', type: 'bottom', bodyType: 'apple', link: 'https://share.google/4xBvZeqxOxcqZAGa6',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxpok5jeEf_6qXOTjuaQ5r9LJ5KFdt6QCvVVoXs7ZlXw3VpQL3xCK7bEnEw7xFSshK_2AWxQrx5vBwp47VFKCSy2pGlGTHPhQI_NgQBhecKb1liCKbBieo' },
    { name: 'Brown Asymmetric Flared Midi Skirt', type: 'bottom', bodyType: 'apple', link: 'https://share.google/mPnN0gwTJDSnf8kwM',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTqgFH8PNABX3IFmjvmZoIFKWS4JGH1zbc1SBSldEGKwQCWgQHWVCulzV5sdaDqTcXARyJbLIwWDIkViviCYXSGxBhHe1TBVQyBIk6lLnk' },
    { name: 'Wrap Style Midi Skirt', type: 'bottom', bodyType: 'apple', link: 'https://share.google/OMSh1qSGcoZGO7JmD',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2IOGpNzMqPW1bFaxD1xph1U6vEd0_MBm1p-OSGXLmH_DUwisOD3DqkU3EmMVmBuGwkXML1OVEFBCC58B20WDjuBCd8NZ_yL5x3aXaR4hrG4JIcV56LApu' },
    { name: 'High Waist Midi Tulip Skirt', type: 'bottom', bodyType: 'apple', link: 'https://share.google/J7WCYEJ2y8P4UxtV9',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2M0GWmNRe4r2_UbLaRZ-7UShRZEOyeAthHg3HbIojVt7ASnM3iJlFjHswW8hHkpRk3aI3xCyQFE7Sl2JlxRUv_JQ54q3H2R2435xYWme3' },
    { name: 'High Waist Woman Stylish Denim Skirt', type: 'bottom', bodyType: 'apple', link: 'https://share.google/D3guaHrrc4n2AduBQ',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTrt2rqcvBqvl9lSWhzwAIwNMsHJIbaibxGA_KD7XVu3bghUq20QjKV9FI7NolSWgYk95-UqvOcwDXb7QFnPsVhL9zVPUpAipCwDdP_Xo' },
    // rectangle bottom skirts start here
    { name: 'Drawstring-detail skirt', type: 'bottom', bodyType: 'rectangle', link: 'https://share.google/RBctRmDeOud6OBiqt',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRc6ne130wHbCIFN6m0X4cQd9gs_PPRX_wY3LYhS02YAcTsd0O2v2-WKKPHUAKYPuFxnDjdzFqk56L_SuKXw7GA-HVyrdl6XOp4UtNMbugcKngBYoBLCNvr' },
    { name: 'mini short skirt', type: 'bottom', bodyType: 'rectangle', link: 'https://share.google/5kZqIk2jpKi6sxQLq',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQIm9vqXo2HW-9pKLbfBcPrSGjGJ-5AJ3zd2nc3tvDQYWVQQhx9D1TYHq529U9IwT50xTfwKllzO56U5Oa05CnxX0WGE1a2w' },
    { name: 'Textured Pleated Midi Skirt', type: 'bottom', bodyType: 'rectangle', link: 'https://share.google/OTRG4uBxiqfLSz80u',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTHzRIEmwRjf96adShX7u3p79bCrHAgrMTbJ5UspB-0MOba_z7D4QZDchgm2-LiSZzhEY4_xfEMAeOcARliK1nDAIzGBlff-cbhhiI5T5tDa6cPuvUKrZLa' },
    { name: 'Max Womens Polyester Below The Knee Western Skirt', type: 'bottom', bodyType: 'rectangle', link: 'https://share.google/Ft0JXExJPgHGj5Ihs',img: 'https://m.media-amazon.com/images/I/61NJgUpDU3L.jpg' },
    // hourglass bottom skirts start here
    { name: 'Women Light Yellow Solid Tulle Midi Skirt', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/cO0hJ32JYoX6htR4E',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMUlCdgH50H1wQpSliXGsnAvGcVuUhPdZQkJcRXX3qWu_kQIXGSOfMkR-kRzJZVOLtZktTI4qHc8iJ7gcqPxDln9IwtTO594ZCshGLMjusMRyF9--jS-nI' },
    { name: 'The Lifestyle Co. Button-Down Flared Skirt', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/fAbLlhCPGRyjLPyEB',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNWrTwGdLdmOSNWT6EPZgO2Hboqt6gZN3kbnYm8GUAkrj5jDNF-kQA8xpoil282mH34WC8omPhRatGeV6e-aPjBFxeck4n7PRQeq6LZmZFpOQcJzsfP9gZdw' },
    { name: 'Textured Tiered Maxi Skirt', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/72QIlRpzyFTEQIsXN',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcJYJ9kAwx0NR7JYrakvvkf0mshsq6uE0qwBF4uDVNt3TqgsS80SDPM9ALgbBBeZ9fQz_kgSBEhXox4A5ccUo3g0Ne3_txEcfjiz37pd-cm4K0MVUh97EcGQ' },
    { name: 'LOV Off-White High-Rise Cotton-Blend Skirt with Belt', type: 'bottom', bodyType: 'hourglass', link: 'https://share.google/byzy4ecbSh13FbFTt',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKUt6F7_t1NjbuMWsm3vwOPzVEcooyDMa3ZJuMBOwM0nTY_tzk3geMipZmXkXGpRcFOmaeiLiiTEX5RyGZuChGDhY_NW4wKLjpZr12T5gBSNBzTi9HDR97Yw' },
    // any bottonm skirts start here
    { name: 'Pure Cotton A-line Midi Skirt', type: 'bottom', bodyType: 'any', link: 'https://share.google/zU97be83yrEXlEdws',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkFq6ZV050YCzrnI56GwDUpvPdxQOHXR3iloqLngQHmuksArCv3vHfal6Nx5xBHhTE_zWHBpfgHf4dna6p7ZBCK35w_XWbaKbA4EZ1rWqIVKOUtGhZvKwd' },
    { name: 'Korean Sleek Slit Skirt', type: 'bottom', bodyType: 'any', link: 'https://share.google/8T31QVqjsPiqYzBfW',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTF1ajVUxN9UZjNH_LGy62A9DYG1yZCKglGUiXEB8tNndsuj65cu3i4Fvnv2uoB8VcDgSAdolIEXiAgtNMaecvNRa8abqHbHz3pX5ICSYgN' },
    { name: 'NEWME Womens Leopard Print Fit and flare Skirt', type: 'bottom', bodyType: 'any', link: 'https://share.google/gZVFpK1VikVj1DRE1',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8o9z9XDYV6Liu1QLzUIk_JGXRLfny9jm5T-Vu3nRq_Z4VWME2jCusJS3xvGUhyU1v1wFpm7lW3TiDELtcCy6vYNKK9gVEI6mmAi_qC2o7X2-c6ytSXLsp' },
    { name: 'Myntra All About You Wrap Tie-Up Skirt', type: 'bottom', bodyType: 'any', link: 'https://share.google/0Ub0xQMyjSH2JS4DP',img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRyed4ztMw_22RitREelz6RdFiLQsnTkbllg-GMkkf2pkr1paiz_g4JrnDl16TarELmOP1eVYRJLitpnXz60tdMGcMou5JO63v_ucrqUJL3' },
    { name: 'HERE&NOW A-Line Midi Skirt', type: 'bottom', bodyType: 'any', link: 'https://share.google/rXFxbJm22gdK6YgQv',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSH6E3-5EYhKlSL8bMvAzjkhcw_GlIp3_iJOCD65MKNzgpJ0eT1qo2EtPqCcm_HgRTaBk2xnVfT021Za6ygL8Tb9HveFRnCyEGdIUylYac' },
    { name: 'Printed A-Line Midi Skirt', type: 'bottom', bodyType: 'any', link: 'https://share.google/b2HcOvY9ts0s1yBeP',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpbicaZUcbmw3aQ5HvRe8XfqkkVmNlKxJg96WqV6pA-NuT_JY7Zrf_7PD7HigtnqI8uG15y6SVcDkYLOo81uDSfICoF-F37knD5D7oVrE1XGpY11F-ofi4' },
    { name: 'StyleCast White Flared Pleated Midi Skirt', type: 'bottom', bodyType: 'any', link: 'https://share.google/H0f9dTnht8jz74TWy',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6PwaTzg1Vs1L2rWgre3IhOcHkoeUB_bA4SUr5amZ3Lq95OtV1YobdK9Id497u6U3wjMAHWSXBSJ9A1fLRgrWMV23rVoyqPntBlNPN_4Wc' },
    { name: 'Uptownie Cotton Poplin Box Pleated Midi Skirt', type: 'bottom', bodyType: 'any', link: 'https://share.google/bcml9V5KwSeiCBk9Q',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2UUe78SQW9hw4saa2THC9oU-OVWy0bW_mAIv132dRa_4JV47cx0-T6kriXA4EJAaYYFpQ9CL4i2C1lbuVlt5zyt4R5zXq6vHwLTnpejc' },
    // hourglass dresses start here
    { name: 'Solid Casual Fit and flare Dress', type: 'dress', bodyType: 'hourglass', link: 'https://share.google/8ZK6p7nVnZyIksPtE',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTxV-EIJ95-XH9FLuG0TuY168l3ifq0pLHpqAmYgvYVwGtj3dAO0D2zz8yoZdgaOOhsElsnE23GUo_LBzGTv63BwCLJht827m78tvXic4JOiyxCMp95gzJ-rQ' },
    { name: 'Pleated Spaghetti Strap Bustier Fit & Flare Maxi Dress', type: 'dress', bodyType: 'hourglass', link: 'https://share.google/NQRnxyIQkxTM4EReo',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQFL9Xo30oNZ1WgkWd8dNSewQpkArUrGeDD0ZQs86fohK-mLsckDuI1RhvvdDM6MAPSaLPohmQUhciDOH82jSbX5YyRwIpMB8t43oYm2CFQ8TIeMSMqPZro' },
    { name: 'Halter Neck Net Sheath Dress', type: 'dress', bodyType: 'hourglass', link: 'https://share.google/0KUI88hyS8tOEk3OQ',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTw1Lir8XY2tzPuYkxkpnXiGOPFSNArsFpDVkgisql8qcRIJLwOzoLRKzhthBsEXYVcxEHlPgGG1UnrhJl3GgDOOSZw67o6MuPjRQe1LONY' },
    { name: 'GINGER Printed Sheath Dress', type: 'dress', bodyType: 'hourglass', link: 'https://share.google/umcVFpC9HTGfpRnBy',img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQD8EabpjJjEKXm_gLtNX1KUh80tbf8Tw_XMbdKjHkLXt_NSeu7hZXHlAz5q1lMTIXBQH1Wx1TvIJAP1KYGJU5seL3IgRkxCjQMYc9qbRmVvvLzqCo9Sv2k' },
    { name: 'Silver Sparkle Ruched Bust Low Back Mermaid Gown', type: 'dress', bodyType: 'hourglass', link: 'https://share.google/LBMHqNd5eI2TgPjqq',img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZYHyr3BhdbMTTY3SQXpmLFrqhALqECEyEy-gzv8IY_W5Mc_ZjjnMYImGCtAVWQLiyJxUpUidF-2bAL70rDYEopXSd6tPN7s-jZjeDrnM' },
    { name: 'Womens Self Design Mermaid Sequin Maxi Dress', type: 'dress', bodyType: 'hourglass', link: 'https://share.google/UEkUyOioH7WzjUL3y',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvEm48_ijdx6nWEwb89mbkA2mo0h4RvuowJY-3hML9Qeo8Q-fzjiJyf_aS5FyBoEEi8GqDtA_Ls-DcedyaSmbsK9LCWv0Zk2zLh0iychh711Y8O1MjTjpRIA' },
    { name: 'Women Floral Printed Wrap Dress', type: 'dress', bodyType: 'hourglass', link: 'https://share.google/VwhD4fU6Ub7HvSEjD',img: 'https://m.media-amazon.com/images/I/81DOKmWrqaL.jpg' },
    { name: 'Green V-neck Cotton Dress', type: 'dress', bodyType: 'hourglass', link: 'https://share.google/vp6cNPmHygHp277Wp',img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQc1WIPiyBLRaX3X7ONEnwln1HV10zLH5rgtvWbVuNXSyHGhFTBas7eePpyXt9EWUpEGPS5pLAR_1vF7ecDefdEoAuD59RibY07ebgxIHA' },
    { name:'Zara Flowing Open Back Halterneck Dress', type:'dress',bodyType:'hourglass',link:'https://share.google/uUP1bFD3U38QSQXGS',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRu4yXtj5HyDaYJ-RimsO1gFqpT_HwUqTaLi5iAIRKlCEy2rd0k-oUICErshTWRmjeMkwxBA7f3VurNrPViFtBsLjE0ZRbuJAjj91T7d371ymwVapR21FyYmQ'},
    { name:'Zara Halter Midi Dress', type:'dress',bodyType:'hourglass',link:'https://share.google/gVLCu3OSbySiWsiL2',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWNGnJuxHazBnQnAUSYGYBVp25pFTkFmGUbeMdidsV-IIkAZa8dbmJaAf3NaXBA5GULftJ8kC8B-dGWJe_b6AYxfeJGi8jJbsGVMc55MrnO6acpMDODk02Pg'},
    // pear dresses start here
    { name:'MATI Boat Neck Sleeveless A-Line Dress', type:'dress',bodyType:'pear',link:'https://share.google/tkqkt3Xdf9Ee1x37S',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS74ZBj0cwdhV0wIGd-iHCgQ9Dk5oA3wY1KsqXDOHIJelxWyWNBaHQc8B3yBIqFQ-I5HqSwht54BlidOaiZAg6Ha-uWAYXfbZyAD8HzVdMi3z8PE0sKxz16'},
    { name:'White Boat Neck A-Line Mini Dress', type:'dress',bodyType:'pear',link:'https://share.google/1VOFj2cUkM5obgG91',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHaR608XXvnqN6zy5WKvrYXIqKkhx5HmSSWrUJgjKR3i2tHdKyxWfFsFnnDhLCF6p1BvfFRVGTEfSBizf3R7a5SlFYYQ8zalh_TwB2AwTD'},
    { name:'Floral Tiered Corset Gown with Sheer Ruffles With Detachable Skirt', type:'dress',bodyType:'pear',link:'https://share.google/8fV4JHcYcp4mo7mT1',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHskChQQnmQIy6mrsZh3IJlkf-uyAEjQQ6iGcXmRLiAyVe3M0BrUgrgrbWcaoc5hbi2uecnA-AB-fYbJTq1_y95Wkp6LGXpLBURnHkAkMOvlV1PmtkxU1bXw'},
    { name:'Women Floral Embroidered Fit and Flare Midi Dress', type:'dress',bodyType:'pear',link:'https://share.google/mkYVdCNDXyQGClXT1',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDvxcsVWAW30YSazjfnSwEOJiKgU52Lv1dfVvumndPKyT4jKqGBc_DjOSjASz2u_emUuaQF8tO4jV9kWL_39-mbUlsvV6H4Pwq4I86SLA'},
    { name:'Burgundy Off-Shoulder Pleated Fit & Flare Dress', type:'dress',bodyType:'pear',link:'https://share.google/P2xR02BRiWR6IyPB5',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2kYvPs5OPSjzsJj1qf2KK-PHGSpBshnQWa-DDcw_96nrNBo6jrMrn-z9mPoRtue4HJ7lHb98GaUQpgU6ybtMSnwWFiNOyt0QX38vHI6BN5HiSlTAwe9rg'},
    { name:'Off-Shoulder Fit & Flare Midi Dress', type:'dress',bodyType:'pear',link:'https://share.google/lxXpRiTtUBb18OvmJ',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHLj3NiUmRh7k396pLfYPiXNq1TKGt2m6fa_r4WV1uLL-D8JgjhI_etWUL6WFpAa2WlumfRt4Hg_EDD_83XcuAYbbPojvoKcM1B0Deamd6iwZA8u88ZhzpDA'},
    { name:'ASOS DESIGN Women Square-Neck Empire Dress For Women ', type:'dress',bodyType:'pear',link:'https://share.google/tWFYe0pZ17IuYzTBe',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhug83qnWHSVI2HrZQOblo3oucyShLGqFuw0_9mIwbb7vNMZ4UbDbkD8S5FFbhQuQG9Fxkc7rtU_ziPJUoCnDJLbQDrxpybCELmamhBvqunPtYUPCCWGHa'},
    { name:'StyleCast  Womens Square Neck Empire Dress', type:'dress',bodyType:'pear',link:'https://share.google/5sOsIrCdQD8rubtcH',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDQwwM71jGwUX1CTBU4F_KATldQbtJ5Wg4DvmafZyfoLFbBqv1GbRXTEHY-HU7TUkFWekK7wqvjkpyi97vUJZMCPCJ16o2riPGwNEcBBk'},
    { name:'Maroon Solid Cowl Neck Maxi Dress', type:'dress',bodyType:'pear',link:'https://share.google/9QOuBKyp7rrFEIbcG',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMm5ThWg1VsvQjNaVNCTvoNCXiZuursCJgR8DJFZXxbRkHsQ7vif2Z0TIFHTlhBaswALQQnq2BLo0vWcos8weCFSPyNr9FHu4-UH-FCZvW'},
    { name:'FLOWING MIDI DRESS', type:'dress',bodyType:'pear',link:'https://share.google/W2Kr8S0dpUsOb6dJg',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6gun1PfpPnd5NkMwhLXQM_xgJ24dpRGVjyPKpwf6YE62BGm8orpOkyXUD2DPAjdDOrYbNIqSe-PJxX0z7btKswXTqBtTi8QbHn6oOo6cySOfkKS395LiRKw'},
    // inverted triangle dresses start here
    { name:'Floral Print Fit & Flare Midi Dress', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/M3I4iVKtMTZA6TWMW',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnX2OoOoAvQHdRGpLhnG7OkG2oAg4DsVJjRRkgSO_s1nm9qNyNsfBIEiFbN5NwMxxKoI5ZW_DpMmtD7SxZXq1cv7qZWUkKAyRtrHZ2ZqM'},
    { name:'Womens Floral Print Fit and Flare Dress', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/LnKZC7cxqHLdMffH6',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPNdzeKWVbA4ni2cug4b5nBhojKBShJKK527DPTTFssj99ezcu_jkFKWZk3u8gnsABY1vmwXunM1BvSXzlREGurDkA9r6dR1-NSvPQD-M'},
    { name:'Floral Printed Tie-Ups Detail Maxi Dress', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/sgYJVU8hY8UYVQD3r',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8boWvgiZwNndHjJ3dvevfKr3M-N6uEV3R5qHlW5tMRSPddUJykhRSDZtlGJ29qj-_oWwO73ptq7LMl02Tn4_16zRcU5qnxU5uhUIYx6SqaVbRBcrjg2PsiQ'},
    { name:'Westside LOV Beige Floral Embroidered Tiered Dress - Beige / XS', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/qHEiA25CFvOlxGfwv',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRxjNuPwEaiHLa77G2uhRTZUZaCv28mO0THRV4LMKLOtF85n4x1js-uEyqcnbkkSF6Hv16VFkDFWgjIesYA42DAY3cLsz3cEn8PS0i2488Qvr8ZFAqXkoKs'},
    { name:'Myntra All About You A-Line Dress', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/6UIDzKkJYpPwI9q0D',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLWVOpbYcOijgrAGJta_AOh6yKPneSVzsx7Hdi-4REUzGNVkQlbIgVEsxqR6nLoTYiHNNVF7KRGQIuasjaRQklJBIS_rk1b8rBYRu7dxjVrH5vMmOUB61zdA'},
    { name:'Wardrobe Light Beige A-Line Dress', type:'dress',bodyType:'invertedtriangle',link:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQu-R6QJp6toGPFlr2vLmRj5WCt6HNyJL_cQyAqmYra67Re_Y5g_eTAeT55ApoWErh0A_nGqU8MpuNjpPN5aNnF-ECrmF68bJQznPFh7zmtra5Bnwqd4Dw3w',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQu-R6QJp6toGPFlr2vLmRj5WCt6HNyJL_cQyAqmYra67Re_Y5g_eTAeT55ApoWErh0A_nGqU8MpuNjpPN5aNnF-ECrmF68bJQznPFh7zmtra5Bnwqd4Dw3w'},
    { name:'Black V-Neck Sheath Dress', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/xfTYlBUVNNnxAGYo1',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLCh9daQytTA06aNt1OXhHYt8uvDopqYWYPpkGccYxZMryS5iSXiSaWM1O1Q91IzTiYouj-iIWMAsITdMRp8x-QnL1UJ-vPItWYdaWN4Im8w4ReWuOrkirBg'},
    { name:'Self Design V-Neck Pleated Midi Empire Dress', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/YQLxtWUCHah1wKbBr',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSe58EiP3qa2wD3CkzO1OnY41A61Vv7SnjEToiBNnMkj27GRO2Gx7cjKbORTxj4LwsCkders7C4XUnVBAEr8WE8j1LusFpVFLg3O4JNEtfX0I4w_sgTY7k1ig'},
    { name:'DressBerry Printed Puff Sleeves Empire Dress by Myntra', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/JfLrKA37zJCkC4fnQ',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHtL6z4o2NFjzaM8gBHYAfy18_sWIGVZN_QNqgAZPQnsRjEbOiyuGZH0iLXas3WChKatEHPH85ZHIyF4bPGGsHNQcg1w6DMdM4YQBfE0NQhJe9L49RGTGO'},
    { name:'All About You Womens Empire Cotton Dress', type:'dress',bodyType:'invertedtriangle',link:'https://share.google/E9UT4h1yc28ckmlwE',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQaPqEpmLA7gidvwN72_zU2TSmDx8iFFJ1uOMuexHG6ISCjAQTRu5KnzjVbqtFQrs8lqc0OS1ONFDFqahJ_rxREdN9TcMvY5M73Ye-XR3P2fogtNixtsiwkEA'},
    // rectangle dresses start here
    { name:'Plum Sleeveless Ruched Waist High-Low Midi Dress', type:'dress',bodyType:'rectangle',link:'https://share.google/7KLdwmz98shZdc6aq',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9zGofZwcFPSZSLh75QEz5BRJZUA6WVTSd2Pex92MkaVUoiPMBquvt9i0e7krIF5Kdj_yBAimBKnaZKmrHkYFTP-bWAFoQbw_1tG73TnA'},
    { name:'Black Sleeveless Ruched Waist High-Low Midi Dress', type:'dress',bodyType:'rectangle',link:'https://share.google/fUYgfWHTyjhOUIqFd',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-jBdgUYbPSPjL2KCrjU1URvmiUKkgFwpuMxlz5lXYYoAUhX76ugWMxZykjxIj36n9sN8F-TadCZDeLAIf6tC-a4Q50cZHGdWpE8xJpRQ'},
    { name:'Blue V-Neck Puff Sleeve Ruffled Denim Peplum Dress', type:'dress',bodyType:'rectangle',link:'https://share.google/LnUQp5IkKa6W4cezR',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYJWV8VCQmJ98NWGssXg5-o_yUHgL2VdWr_j6_eo5h15bKqZ-vcHCHSERwJ8jwHhm3GtM-q-AMGj0_zOxdOYieuP9x1_PuRNIKqNFaLDQ'},
    { name:'H&M Ladies A-line Dress', type:'dress',bodyType:'rectangle',link:'https://share.google/4aLZFQzIwtBM39guV',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9q9ho8dV40cUbZ9peSGN62kPFfMKKX1DE_QkaNl4oX58BXijks24AmiN2cHr2JEGN9qXcAlF-NTO9Cpn8U0l6qDpJ4LBk3xNiRhpyHFY'},
    { name:'Nayo Shirt Collar A-Line Midi Dress', type:'dress',bodyType:'rectangle',link:'https://share.google/h6sRbFSCndN6GNJT8',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRYa-OjVGjAr52SGvWKbtRz4JLbyFFOC2Nsd6Zwg5U3pIQ5oytwFsj9fWOUcZ2-6Tw_BP1QKM0o455VWobpdG5BCsdrrVfbCZATLje-BTyl'},
    { name:'Wardrobe Green Abstract Pattern Wrap Dress', type:'dress',bodyType:'rectangle',link:'https://share.google/D7O3zcDoZuUZnRPA1',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRrqua0Mqow04CVwyZtPWMn392Bs3vJXrYTQ-N0JA5nPISLAnADazuMZwd86Izdr-BAAeWrRHVsACQanBwd68bG5JcZzh9BNnyfEvbHvU0iGYwy_1S-ZcJThA'},
    { name:'Zara Zw Collection Striped Wrap Dress', type:'dress',bodyType:'rectangle',link:'https://share.google/o8QMzN5uWEpYgiLtl',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHWayt3EWnAV2JMI47VXguSmK2C0BgQdXVgqonESXEelZhsBvYax_J7iMmwsjXnSWtEs_596_ZhRZWds-Fdiy_KRooTicemWiiosFYTqf94Bs3flvM7XH5Vg'},
    { name:'SASSAFRAS Formal Bodycon Midi Dress', type:'dress',bodyType:'rectangle',link:'https://share.google/DpZkB1nB8I9vjwwqh',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAWw1z74NSKKbLJRh6Lq7oVqapTw0LEIonEW0cwr8ZIOYU881FDe1vDZrwBqsaM4uTP4FuPNh6PVf8r8FCC1sLhrasSQVHeFhYOaISQ_U'},
    { name:'Zara Belted Dress with Bow', type:'dress',bodyType:'rectangle',link:'https://share.google/LFNZiWlwS54R18Rhc',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTOUwnzpQxCKk1Px_R_FPIJlcH0RLpGX_5vz3lFp36it2uPSMa6OnIWqxpC0rP0_0sdZOLbUfNHnGcxOBYbE_eUTEdA3PNkn7tRKEA1O6g'},
    // apple dresses start here
    { name:'Square Neck Textured Waist-Cinching Black Dress', type:'dress',bodyType:'apple',link:'https://share.google/HRix0TW7KgG2XLL7F',img:'https://littleboxindia.com/cdn/shop/files/Square_Neck_Textured_Waist-Cinching_Black_Dress.jpg?v=1741076267'},
    { name:'Boohoo Knot Front Crepe Tailored Midi Dress', type:'dress',bodyType:'apple',link:'https://share.google/8W9hyecEnh4t73wEC',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDC96GIkp6SBXjJ3pcCny2GVMP1qMtP8vmuLp0lbvkQ-67ZKrrfkJYQlL-prJd4qxUXokZ8TOv3YV7Fu3NYtNSoD3WhUmJnQgvF3czW8lCWrAuCs7ZAqLN'},
    { name:'Boohoo Tie-Up Detail Notched Lapel Collar Tailored Mini Dress', type:'dress',bodyType:'apple',link:'https://share.google/amLZshD4zhqt7eDBt',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREHayw5QTk3n8naACOvqUNr_tlYv5oKMjP_9D2WI2_z46H3XV72F2D0yU0DJlw080m7vtQQ33FjqjkckOuqptvFZykTsGOzWM_LtKdgO4PeSt5h1uDV8N3Tw'},
    { name:'LOLA TIER DRESS', type:'dress',bodyType:'apple',link:'https://share.google/hWn1LPCMIW9NGcH3l',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREJouj5FdDsBENEYwKtY09xKz_hqGlvIv4e0sz2rEg6tdOBmJBvCokGeK_elln_gEU6x5qU9tS0OphP-ZGP1RGcpDWeGJI-c1EzEBBLLw'},
    { name:'Square Neck Puff Sleeves Maxi Dress', type:'dress',bodyType:'apple',link:'https://share.google/HDoTdkaRuXVA7VLaa',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYq0mS8-VEToNArqfVyt5SusbmqvLHEBFu-lBwsVfFmyy5fZgClAV9b8IoS6ibOhXl1M6prINjbL9yU7TRiGVRlC6Z7Y2nm5QFjtPdJSs'},
    { name:'Women V-Neck Cotton Empire Short Sleeves Dress', type:'dress',bodyType:'apple',link:'https://share.google/hxCYSZKhWCV74p21K',img:'https://m.media-amazon.com/images/I/81KIMnu9UFL.jpg'},
    { name:'HERE&NOW Womens Tropical Printed V-Neck A-Line Midi Dress', type:'dress',bodyType:'apple',link:'https://share.google/wqp01x1AsIZATsyls',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpvO6WyTtNKi_-izbDW36_0h09IBLbnoTy2jUBF3583toFoF89SPxk-uxIM5bzdTka_UW8T6tMnj73lrzRINmsZYgwDSG3pob49uYwLLI'},
    { name:'Streetstylestore Strapless Floral Printed Maxi Dress', type:'dress',bodyType:'apple',link:'https://share.google/nBKF7by4icf970hvg',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJBe54QBHxBK8cC8PE6i8eJQHX2lyDQ5eVWccDsQ2y-zA0968a1zzkEkjOSlvN7sAB0OzxiBDlPjAusk2VEKajQoIiAyXl-q5BvUwusR5gTBFsUq7Z2xTu'},
    { name:'Berrylush Women Solid Strapless Neck Sleeveless Smocked A-Line Maxi Dress', type:'dress',bodyType:'apple',link:'https://share.google/nKQLup3X1M0nykosV',img:'https://m.media-amazon.com/images/I/51MO9byL0-L.jpg'},
    // pear tops start here
    { name:'Streetstylestore Off Shoulder Full Sleeve Crop Top', type:'top',bodyType:'pear',link:'https://share.google/53oo6HDdtCQtHIBoG',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAFEI6AejSZaDMUOaz0GEjqy9q3h13uXWc-3Fq11bgAh3MG3EinoMyrl23Sx9MvOOnx2QQC_ooafOEi5XCUyQQmdPurzpxZBZkp4jMJdfRZkgq3nBfS2Ep9wY'},
    { name:'H&M Ladies Draped Off-the-Shoulder Top', type:'top',bodyType:'pear',link:'https://share.google/g29BOzN5Kkq9LPIVf',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfy1sDBddJERJwCsi1rqUbVj9vo0Eun29OO_rONFqb_fnCNe-HNyeC15zQ1EwATIb-WcE8Bx9ekfxRT4Yk_UWvWH4LnxwnlBdFPIOP9BZRAgQIy5Qx2Nv6peE'},
    { name:'DressBerry Off-Shoulder Ruffles Top', type:'top',bodyType:'pear',link:'https://share.google/e3hjzqD34ROvifPlI',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTws8TcNzEiogiATauKw9mAej5jTa7EYj1m5v4jX7cwUch2AwMr0z99-2DuHky4KbPih8Ve1c3NMv5ABiNcgpNC-MT9YPcA3AZdD5zrsS3lsFeAaNUyfWSt'},
    { name:'AAHWAN Womens Solid Square Neck Top', type:'top',bodyType:'pear',link:'https://share.google/sVKpsVIshlAzclwPH',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRaJyBy2mL5hQTlYB9hhIzSJULOfy7x4dvhr1upeaZb4zi5vbyq7MVYU15yW8BFqTRY9tOkQ9hP557hQT0-rlMeDNNvfAxp54IoSgCVU_5d'},
    { name:'H&M Ladies Square-neck Top', type:'top',bodyType:'pear',link:'https://share.google/qepOhiqDNCOpWR5na',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2pMoooQtzOM2FyB8g0JYBH6cpATpVzu_w4otv-K7odkXldqwUuOk4S1NjU7aoIeZ2QvhyDum6CQDtZ161G-rfIDl3tHsyyFDn_5Zfm3PHfwiFh7pRhFU1Hw'},
    { name:'SASSAFRAS Women Square Neck Regular Top', type:'top',bodyType:'pear',link:'https://share.google/OmHancj76VnVc70b3',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTnUI9ndxmCHh3oUb0opTl2cleVTwQkiR1tzFZETcwW4hQZAiPkQA3f5Q248IiFM1DfuN7qBZxxg5Hp_WIy_GjOwqbBCd-iUpj-B4xm_8D2vb9ErHgNoWY9'},
    { name:'Max Womens Solid Regular Fit Top', type:'top',bodyType:'pear',link:'https://share.google/3vaIPY9SobIf9Mrv4',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiULk3ybNUvg3eL-arIaNIqmY_hme8YQlZOQAnZrTaqCYqdzvtt5S2gzbZl2AGbCMcGAUiKjEbQAbXXuEUPnkT_XmS2lsq3pVB7UJBkew'},
    { name:'Mango Cotton Boat Neck T-Shirt', type:'top',bodyType:'pear',link:'https://share.google/i8iJEglsGP9C4Kwr2',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsSApYAl7ov8oRg7HSTLvxKt9AiCz5R67LT6NDDN9mr2TQXzM3FuWHJgznLOu4Iif7L7DloJouustSBvqqaPcZjPO0f9Iu1qke0VQ5KA-BDqUV4TH2ToSP'},
    { name:'Trendyol Women Solid Boat Neck Top', type:'top',bodyType:'pear',link:'https://share.google/lh80H2ZMhE9stZRwU',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzCox7BUFcdqR_C-sEeqYmxgSunr_vbeKKnnMJgYE0w6Qf42nesmBNK1OBqJPlhJnpfufwDstDbeC44Irovgbe-5CENvrE8rHkt0coQ0EV'},
    { name:'Clobug Cowl Neck Top', type:'top',bodyType:'pear',link:'https://share.google/opNM2mVOMKFQuY2ip',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuENpHA0rEMMRSpCja7JDLYzwhSXinImjAdp6LlfbYtIsZ8MmELS7nqnRnWAjzJmTdGtW26E_Jkteqk_3i674U-8GRTfcbS1KkXWIutTVwBSyj8_A8lSmN'},
    { name:'Clobug Cowl Neck Top', type:'top',bodyType:'pear',link:'https://share.google/nhrLlJylINaMtNxZj',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3KId3SfvfJcaAPetLifDlQnz75olgebonmiUBnpJgkOYV2SSGQeJrKZmLgwHTjn_glpY7VHTSWVgDhZ6O1FCc0LD_DuM1b84KgbQqhHW6p2qrJQH4gyktqA'},
    { name:'Womens Solid Sleeveless Halter Neck Tube Crop Top', type:'top',bodyType:'pear',link:'https://share.google/siUV0qf3faWBXXdyU',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6dFpP7CuJlUSO2kD5cdBnSCPyhLMhSiEWyvQUUSV2-LLDMw6M1I38_5H8yygGbQ8U9UOvQFMU1p0DD_RjhGKAIK4SYhNZkgpxwPiKYOY'},
    { name:'Tokyo Talkies Womens Fitted Crop Top', type:'top',bodyType:'pear',link:'https://share.google/ytTiZpw7LpzoUX3cB',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLI8qp8qlh1QD5nKJKWutpkU6Qp_GVkoxBW7bNY4Sq3BLgLJOLylyV3m1tItVZV01n22SJ7Z7KtcYQv_epdAlvio4o-pkO_DfExc4iGLK7W79HasWU5R43'},
    { name:'DressBerry Chest Pocket Detail Shirt-Style Top', type:'top',bodyType:'pear',link:'https://share.google/dYIJZEdKUIbgfzFJL',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRqV6jWQHr1foaAIIvvACgX7nVHyos0ifRvQtI2kA5umzgWbPjH9BNQkI4G-Be7GnjG2-xTbxrgblPGIHvdbVTOr7PmHno9PKV_dNq-SQ'},
    // apple tops start here
    { name:'glitchez Striped Asymmetric Hem Tie-Up Wrap Top ', type:'top',bodyType:'apple',link:'https://share.google/BOnfLGQAZBRbj9LEH',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVldKUukcukKjbrqbuVnDL9e5Xs-x-HR1FFFejtSSuWZV5_xb3ZULbnv8mcv7SgaGdR9q51k7fUBoNzu_H-OfO0t0qjaSRbof5aUPTyaTTGCGVqQs7ngCH'},
    { name:'Womens Abstract Printed V-Neck Wrap Sleeveless Satin Casual Top', type:'top',bodyType:'apple',link:'https://share.google/4dvFqyZ5w3Zt6gMUR',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2j78Omp7cWR1DwL4tcvqB-aF5cRbSRIj2Jh2K3zFUq-ZifU9vv1HfX0Cf5utU23aB6gFKCedqMJY1tG-rcVU1vDspPZUlY_C-Nt-6EtI'},
    { name:'Happiness Istanbul Womens Short Sleeves Ruched Top', type:'top',bodyType:'apple',link:'https://share.google/oisLhe6WmYOc4NIZh',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSR1I_TKiD424fulMBawnocn4mBgME8o99pk1iQKEz2Tj4VEHhWcvt0lYV_aCmlhB3C26zR8mYVVqVmLBD0hRyx4piH51kCOZ85LesEUqw'},
    { name:'Tokyo Talkies Womens Ruched Crop Top', type:'top',bodyType:'apple',link:'https://share.google/5jUxu8TlUqNlxN2eP',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTiWry72iobFy3ImLdF35ORgZ7O3ADmsrBufFcs9gPqPqRiZ1tMM4gihbj9wo4O-VbElYIKpEO5sbyj0FKUZrHfz0ER3Pya6y7hCmLjK9o'},
    { name:'Happiness Istanbul Off Shoulder Blouse', type:'top',bodyType:'apple',link:'https://share.google/e04L1DBu44JXGnc7i',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3iyoa3mgrFQR6oT62W4BKDLEVGhElNhnk_lhaqoVLMetU9xzhzfJ8fiLwJcUfrgmzpDRC2hcvRDG1pcZCcNz9gvl4qTYz3CO7cVuQ8cc'},
    { name:'Off-Shoulder Tank Crop Top', type:'top',bodyType:'apple',link:'https://share.google/QUJVHMay6oYs8lEgc',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlneo5Hl3NL0LAVfH-lrWpxv9b0QYdxzOeTXgg3fnNag04hy93tLiPY2Sg__xTgFdzDz4dZ-X8aqm3zQFBKi38fO9SH4u8NtH6j-INwP8'},
    { name:' Printed Stretchable Draped Crop Top Navy', type:'top',bodyType:'apple',link:'https://share.google/sPJAeGk4m1e9qmV2Z',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSykM0ZMGZuvaDKtfPql74zGfbvrcx3ZDRfXTGaOUm-raJz1o7jq18zGW6Dbq_B9LZDAvzxiNEI5KbmrD1OujbF1fE-5pTbNYqtS8YHtx8G'},
    { name:'Maroon Solid Cowl Neck Ruched Top', type:'top',bodyType:'apple',link:'https://share.google/SFEqBsp7lkMGMKxJM',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKzBoq_vXMFMGDVK4FotMZLUB8JGjHghS54_OqmVXLiS4vcJZ06ClaftJuvphXYoYt4kloD2LBV_KizIApVh13WK-vVpZ49HWHobYwDx0'},
    { name:'Solid V-Neck Polyester Top', type:'top',bodyType:'apple',link:'https://share.google/QVGH9UETt35WG7gwD',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLXLRv-kJqtWQEDxRc-XpHsTHFqbx3hJfUXp9QGtVCJ8bI9JL9yynZ-qi41fD7XjSui-UwZTtEhtoB1i3f9ebmuKz1i3v76hapwixgvKs6S3T0vz1Rsqco'},
    { name:' Solid V-Neck Pure Cotton T-shirt', type:'top',bodyType:'apple',link:'https://share.google/XfkDJOnbowPQdBCNo',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTLiuVcNcpSDm9G-27Jvf1EZ-5tBmPJGfoXofY55ZNI-JSxIDUKt2v3gss6h19f00-XOVomClCUNf4hEF2D9y0u4QIwAn5Lqkj7wqLswwt8'},
    { name:'Bandeau Peplum Top', type:'top',bodyType:'apple',link:'https://share.google/nBWvWPSIRbovpKjlF',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTaYlKCbZ62GFxT8j-VmB8mrpvHHIUAn4m0GFxyOKstSoGzRGbZ2PC-WCPA_jNEKNDi1zsJVfNNwKlppY7_ULcIhSeaBoHgKt-xE-mBmnNvoMyi0qIR2NsAyQ'},
    { name:'Sweetheart Neck Pleated Ruched Top', type:'top',bodyType:'apple',link:'https://share.google/3KcgVhfD2IIoPPBb5',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSmaI90KSOP_7HdMjycSTAZ5okjoGCZt0G20krmk27oPuG5qdjlrKw-OwkONwNLtZg7uC9WLrnlpdOmN098NEPlwZka08AeqizOBgs_aw'},
    { name:'Puff Sleeve Ruched Top', type:'top',bodyType:'apple',link:'https://share.google/ztK1xLEtsdzzicBSD',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQC8z3Enk2zujz0oavM9_p-_CvmKTyi7ynTDGE9IRKoQPlFW1FM1xQwG7QRDqXQz4r5ioHKQo7EDrcQ4Ay7Vguyf6v_JPKUMpeDqgQlaOM'},
    // hourglass tops start here
    { name:'Square Neck Fitted Top', type:'top',bodyType:'hourglass',link:'https://share.google/wEriQqu1gumvQmPUl',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRc50hhaVYY9f59Zi6oSaX3_U50sHyIitXZR8IcminJWh8mxJyJI1QvHDkvfH0CkVdeIGMpgR4qcdEpT5Ioz2BRrVClzO6ll8ELR_QZlB3V'},
    { name:'Cowl Neck Fitted Top', type:'top',bodyType:'hourglass',link:'https://share.google/hxhFKsJwQKzsiLYWC',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3KId3SfvfJcaAPetLifDlQnz75olgebonmiUBnpJgkOYV2SSGQeJrKZmLgwHTjn_glpY7VHTSWVgDhZ6O1FCc0LD_DuM1b84KgbQqhHW6p2qrJQH4gyktqA'},
    { name:'Striped Front Ruched Fitted Long Sleeve Shirt', type:'top',bodyType:'hourglass',link:'https://share.google/HdMx2jEC1SAQkRzFC',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNUYiyuX8kF2Dp9A3QJQWQDXUvdi7ukNa2qzeOUJBgaiTqXLX2SbqtuSPY8yDWo-yt6zl3Huk6Y2J7ihBQFHsL3zptORVeSXZNn14vkds'},
    { name:'StyleCast V-Neck Fitted Wrap Top', type:'top',bodyType:'hourglass',link:'https://share.google/FtJTdvoHCMdCtWKMG',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdDGi24DlpgYluovglHsPQaYsm9n1HIq79HEwMhJAmjAMOLtL6YOXv52yOXb-1A9UvIVElenMiSSwtbd4X8AOnV0j0v9-GE2n7z2fog7E'},
    { name:'Lace Insert Detail Slim Fit Wrap Top', type:'top',bodyType:'hourglass',link:'https://share.google/kQsKQuG6avow7FzoB',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLZnItkWyFg1RMjjZCKHAFrwr-6OW_9zEo8J-Y8WS8u98hq4JqEpg0O1kt0kckdx94RzljXeBcrjvsc-eZTFfh4rI0inuRQfWQlUbEytY'},
    { name:'Sweetheart Neck Top', type:'top',bodyType:'hourglass',link:'https://share.google/5TKW3Glh8xSBSKu70',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGLeh0k_vOWmP8g_5f2hcPGnQGQ3H3qWKq0yXm12hSIxajHXwVsBPRG4ZrgAeESPXWkuZfHppNW8NMSp-TPgR6Oggka79oLbU3-ZrIf55l'},
    { name:'Sweetheart Neck Cotton Top', type:'top',bodyType:'hourglass',link:'https://share.google/Dnga3SiWhFpskDEMw',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRb6Hq2Co4HZr4HPZVdgRw70Wa8RwSu9Tp5U55yYQr5f19QmRFtTUmBr0olGpZExQ4QXy7uKzXaT9A_HAn0SekeEl3D0eZuls33eOkI3VBM'},
    { name:'Ribbed Edge Scoop Neck Fitted Top', type:'top',bodyType:'hourglass',link:'https://share.google/In9BzAgyBWW7Tusot',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuVGxiP1Scvi1MiH5Dw0r2_6uljCyDppS4KavfspXlVDNVq4nThCa-xBbQ6JREWixDELeXJBUgBATARMxArGsZiv2ItSK49ngtsfKO7c9XJENhUdg9uYBk'},
    { name:' Scoop Neck Top', type:'top',bodyType:'hourglass',link:'https://share.google/Ucumd5AK50ohvqeDV',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2K6HN1blrGo6NINB564JvBx1szifRPF8HAA8XD4CIYmoYgMkKXjPGMltLJnv2f2ZhRiLRKV-qfFoggi4-F0MtzV5nX8JCauynAxyzQqk'},
    { name:'Fitted Ruched Front Puff Sleeve Collar Shirt', type:'top',bodyType:'hourglass',link:'https://share.google/eNgYyZme1fVkeATFi',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_fU_SPiILZR5ptHbehjrpVAc7v1lS-fSEX5vtZVpBCxrqP4-sJpV1hnLzhJWq1ug8qZt2FuIT5aly7SLfgTbl93ZehZH8oDSdrbqQjAcx'},
    { name:'Shirt Collar Fitted Top ', type:'top',bodyType:'hourglass',link:'https://share.google/18SrKzENc6VCWGzT9',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuyDjnjOXtpvDjRq3NbTVItfOsXFQT-Jf4Sol71qmQXIJoEVbXKy_u5_IgAeXlP5F97nsbg5Oec0J6nlmuEeveAxLY5Pn_8NmuXjnHmojtVRM-N-dQFAhHjA'},
    { name:'Textured Ribbed Belted Top', type:'top',bodyType:'hourglass',link:'https://share.google/xlUkGUNMch8SkvPo3',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNb1LJrXPRK0Vd1t5S24PbWroPsoURRcW44gUiTFBJhEznZFLBZeRBtjR6lulp7Na8sVMOkOrmXiMnnLTrptss07c64q6_PLfaKT40m9nP'},
    { name:'Cuffed Sleeves Pleated Belted Crop Top', type:'top',bodyType:'hourglass',link:'https://share.google/lxRAP4gSVKfRb0z89',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ5JUEZGmhqUjIM4IYzBzjpRmHUkf3ilQGiIQLqFfZ67lpmYsiUrPixQbJjbf4VfUWqmtrwhNznNvbiujBTcDPV_d-sjxr6P3t9u8npPxc'},
    // rectangle tops start here
    { name:'Solid Pussy Bow Shirt', type:'top',bodyType:'rectangle',link:'https://share.google/zoqFafFpOx7VF5h28',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRn59S_o5av4PpjJrbRgTWYVeRLxAqbbbzQtbgMdWYy4MSygk4v5voYeN0Z5owccBFDeo3ez5JsHbU8zbNI8Md9KE4OL9JhIHgdKLA0HeAjV-Epun-LscuO'},
    { name:'Collar Bow Detailed Long Sleeve Top', type:'top',bodyType:'rectangle',link:'https://share.google/kelVA597Vmf9zOXLE',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMQAJukfL8Ls3TC_aVSBeGQcqpkwo6x0M3jgFqm83f387EwQQCKpXMDLgJ37SeYfjGxXvHJQmbnCu--Sy_03T4Hit6AODu3bkv0S7mFXo'},
    { name:'Solid Off-Shoulder Top', type:'top',bodyType:'rectangle',link:'https://share.google/8WECjrk4yvCwJxKSM',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQksljE-AUikv6avfCC4AYj2M79qATHvLlKX3pCdafK_DNXMECgpkwyA1-gCOOfz1UHK61d-4jXkATwhDDobjqshg57x57kZ6D1n_qX7smr'},
    { name:'Off-Shoulder Contrast Tie Waist Vintage Flared Sleeve Top', type:'top',bodyType:'rectangle',link:'https://share.google/YgPJiRi3Q269NQFLp',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTUuTSX85WOloNpiOjPsE-XnPFefqSoCPlhTd1cmge_AMAi_myl8KajjMw88x3csQBxGLEYp-iCmuk68lPdg_d-hDJEEJoUygjj4RlXDLgkdRtZIJo5hwXmAizm'},
    { name:'Ribbed Boat-neck Top', type:'top',bodyType:'rectangle',link:'https://share.google/T3FDxXITEjolEWVNX',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxoERBUoNT6GhzCi1HXXFpceVowC5e6PcLDvg7RQzATNOjlnu_i4y0qlGd-jXf5lFQ2U166Xso_jE8b9qFAmVGZzapVyTQN0dPUUsGr3mJWFxHITHZqn8DBg'},
    { name:' Boat-neck cotton top', type:'top',bodyType:'rectangle',link:'https://share.google/ZrLZ9vaqtoZGHnysw',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxDqGmpE4JJFuo5ez44mlHSiHH4yc3-XzRar4MCveawZ3Ulv0Xsv8xW_RlHRa7A6PFLtfWPfa_OlEHTO8sb-JjqHNGqPEFNfMhfGcmCFI'},
    { name:'Pink Ruffle Top with Bow', type:'top',bodyType:'rectangle',link:'https://share.google/g8fK78e7FGlGp2zQS',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbw6UDgcVyCiHAU_vuZaF48YdVw_prEwCpm-0laqNxj14zyke7enako8hh-Cp0wozMZd9Rh3hjlN4JLoQFtxd6NaDritSEfw31Krb8Og_I'},
    { name:' White Chiffon Square Neck Tiered Ruffle Top', type:'top',bodyType:'rectangle',link:'https://share.google/RELbB7SWYJ8qiSoqK',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRz8grY_h1zrk5Q7QOteZbt3NNRnr7Nczq25oodIMUszhoDoV6o-_COxRN7T-broKgRjW3fR5E9ghUCxC1Y7tFMWZeW-JSU0Qa2yAa55yPc'},
    { name:'Drawstring Front Off-Shoulder Ruffle Hem Tube Top', type:'top',bodyType:'rectangle',link:'https://share.google/dSIsFpWE6gvQR83TT',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTM0ifzAnAMeDujW09MvsKiEfpUIo2dKPKbSFOgoKzPVWhJdbmgixiw2wWTSN8Tg_15LaUqjhbujoQSYq4zdTAMB3I9VOwhLTW8tOSq9WZ0SvJuQ4l3IyYZ1w'},
    { name:'Mast & Harbour Womens Solid Ruffle Top', type:'top',bodyType:'rectangle',link:'https://share.google/4O5G74o0qjkxbbEHh',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5sXUNzhw9oGn8LFJc02W3FdPs1oIkgwl25xiUcv01EqxdS8T_Ec9ytk-R13K9h8HUaxOxoAY4vYGgtz_CE6vyqgeOyqnXLSBoQ25UPnYh'},
    { name:'Belted Tank Top', type:'top',bodyType:'rectangle',link:'https://share.google/0MIvQrDZVDY8pT1G5',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGpyqUejPV_UC7aVkj7lc9Nhdg1DvTZTaTYd1vK-xWDiWZ7XSI29Rr_HVZKFN0WZKK4wrPJKVtA-hSpu8u09HRsU9M-rYiSAARu9aqeEA'},
    { name:' Puff Sleeve Wrap Belted Top', type:'top',bodyType:'rectangle',link:'https://share.google/jX6DvH2Y04sFMMEfv',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRF0KI8G-FGyFOe5eSmaSxq6W1dpi1mkerdA3CbEi1G-b1BUPSUibGqxLfv9pZMPUZ9N7D84twqmRogzGfulrAFHWTiEOmFX67xBzmYgUg'},
    { name:'Tie-Up Detail Seersucker Shirt Style Top ', type:'top',bodyType:'rectangle',link:'https://share.google/wWOK9dOrfaoCbRO3S',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpUc9WNI3eCWI_EhyRx97cHwaf1ACgvzcgQEwKbFxK7cjM4eyj8o7_bR_EP-6mxOfxVY1ClQviqy8NnqG4wpuLkaaFfafKz9jkcUAZ1Cc'},
    { name:'Slim Fit Button Down Flared Sleeve Top', type:'top',bodyType:'rectangle',link:'https://share.google/1g2Z0vkUT6BFepuBS',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSkZh0YGfuNo6YARaA3vNMr6yLXjDtLIFAEai8AjAeVVVVrWwMJ38N7W6YVSInxP_n30SNk8L4H7zFJe9MBDB7y9bie3ZZV2C0ev7WR2Jk'},
    { name:'Women Embroidered Peter Pan Collar Shirt Style Top', type:'top',bodyType:'rectangle',link:'https://share.google/wHNLb5hOvBFHJxxzC',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAVBiG6yS3wzw6zmt7pNsqi07J5Kt4cmhK7pmIX_K_Ju-pkNCPXmmOFz21ZN4E8ZrKcNowSonKhwqVnwTrvQ3kCgk6WL0oyGeu2tupVRm5dpz1FwyFd21Z'},
    { name:'Womens Button Down Shirts Striped Classic Long Sleeve Collared Office Work Blouses Tops with Pocket', type:'top',bodyType:'rectangle',link:'https://share.google/B8uEKjeYItHBlnfY6',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9FU1ruqF4ezKvt6qnh29tgIdYtdHrJDDORiBrUz5JRRMiME034JR0v7SVBG3DBRxi7nEPzSlAMOeCjNhpkNwn8OM4H281'},
   // inverted triangle tops start here
    { name:'Drawsting Asymmetric Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/luRr4hu7bRqDv83Vr',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEvnHqEyuOaWhYUzUALbIYtGEmVLRxRuLgFnOLu15LutRI4EcFH32NcssZHLx_kMgA-qj2tdiVRcRT9UgjAT96tOIpCP9nP8DwqznSzhIz9PbLrp-SHmmU'},
    { name:'Ladies Gathered asymmetric Vest Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/oB3iKuoyFetQfkPBC',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuHIhg3pqOz5lNHsTmjiu4SoVrBeyhpkmfqFM9iAb3gidfVtVdKGN9jQ4xT7n19JVv1K9ELGqqeC5LhZKh_4uDPFGQJ9SBv9fiBY_HZiY'},
    { name:'Ribbed Asymmetric Hem Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/MmbAhpyixq4ptkxVl',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSfSRBhvNinM-2MJ30q7IB18jBRwmOmiH6-qTI-Jt9FWpJP3bktl3tBBhfUztnN7gGQ-qppuQ8yMJtKmgATesVEcaAVHiu-ooTt-zxWKmLGoPCSNetEIfimw'},
    { name:'Savana Brown Tie Up Halter Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/mAi5bj0kCH2Wg3Brw',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShn50g8AAuqqKtDQm-I0VKvO9U2fiQxO9NiENuKmnxB_QUcF5gDD548nDnKyDko7dEtyPpmgtuWKoMUe9yVI3SAwXEgXZybiV7tNgCmUpE9dKaRjz8M48w_Q'},
    { name:'Streetstylestore Ruched Halter Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/zhVCJqQZ3DIQ30nF8',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQiLiSnfdKcbwNa_qb90EU9pyhXr34tnNJfKXzyaT4uFP96bBkFJwsR3aGeWte7yuOL0HWfTngq05bpkE8gBtmc64poYfV5z1_5GfanbXU'},
    { name:'Halter Neck Fitted Crop Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/2nwi6whoal8lLKy52',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIBDcz-HIvkSEaSmj4Tr3Ui9QrH83q_SlrvlKCoG-YH0BjdX9eWAwuaAxLaenIciZPZVTTjdVgdj-bht8BSoZZ69PGGkUkZ3FWxp7IFGcCvHU0eTn33jT4*'},
    { name:'Flared Sleeve Wrap Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/TiuNmTXvNcKkk7vOZ',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQa21plxU9oaDJPtbBDPfb6jgjXxQLAjVBHDkD7KPi_WA0JNY6AoMuXVzfwSyoxc9fmtycgSlO44Y3YrkKjL9k2CU3OBQBEKncFrnN8_gM'},
    { name:'V Neck Wrap Front Lantern Sleeve Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/nxbANy6l5q2wY4Jh4',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQPVb4If66WuxiV4falE91D5ceSEbk7WhUeeWHVqp5IaQH2mhPxK61rez-shOgcm2HcnQHamMH_OE6EYH7IVhkXH51DbILr7XEyy5iWc2lA'},
    { name:'Chemistry Shawl Collar Tie-Up Party Wrap Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/lM4SbZFLlCbvf4jkb',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyeKE2stuaXOKGRryH1ktfdT1F0d6KoxC-Xe0RCL8e7JSWmeGbWwf5q0MHPUZJ-Y8tk6cbSjnXj-dJu7zzhwxBgv1EzbmURpasIcJjJUk'},
    { name:' U Neck Fitted Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/JDwLJNF7FMbu5wuYM',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRefUZC0C9bhsl_Y2qfkzmnkQGaaMG8kWl_J0EoFeyHK4rUsJ2vcf2-oXxxE21bIlLs-YH7Nh0pN6_2r-qrRou8PzelCjw5KMGfxWrcT0g'},
    { name:'U-neckline Asymmetrical Ruffle Trim Knotted Tank Top', type:'top',bodyType:'invertedtriangle',link:'https://share.google/p9v8poBowxdcfwQd2',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT0UaR-kT8B1dLpr8DkiWDr8gz32_VW9kdlrGyFDYyl2BV7xswxDdNG5BuQucTukuKsXg4pe7rxJA8c98TKFUCC-CR1oty4NXymlKXACuIqLtPEDToxsx3REA'},
    { name:' U neck top women tshirt regular wear top for girls', type:'top',bodyType:'invertedtriangle',link:'https://share.google/V9ddgZH9ysqBC8lwO',img:'https://images.meesho.com/images/products/497290830/l3y9x_1200.jpg'},
    { name:'The Roadster Life Co. Solid Ribbed Hem Cardigan', type:'top',bodyType:'invertedtriangle',link:'https://share.google/ZAmawehKEf7097av7',img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDIn5HOtA2UvDjpSreBWq21B2aCtP4bypIjOlXDoegYXMTvEcmLC5zkGpp7k6fptT3GV8HHl4CJg5ZTno7MnT4tO9yGX2ngdGsA7fPyhE'},
    { name:' Ladies Fine-knit Cardigan', type:'top',bodyType:'invertedtriangle',link:'https://share.google/Jx25SG5kkXzU6oiji',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKyefQDskCfHLBj32prp3JVbgTexCrTQJlxyMLBEDZELScaG7SceidhQFn58IOWFGoBb38RX5mRbUVYvfdBQ6GrsixzLkewpKIW_Vc4xWh-HBazuOcaOu3jQ'},
    { name:'', type:'top',bodyType:'invertedtriangle',link:'',img:''},
  ];

  function initializePage() {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user) {
      localStorage.setItem('selectedBodyType', user.bodyType);
      showCategorizedRecommendations(user.bodyType);
    } else {
      document.getElementById('bodyTypeSelection').style.display = 'block';
    }
  }

  function showUserForm() {
    document.getElementById('userForm').style.display = 'block';
  }

  function saveUserInfo() {
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const bodyType = document.getElementById('bodyType').value;
    localStorage.setItem('userInfo', JSON.stringify({ name, email, bodyType }));
    localStorage.setItem('selectedBodyType', bodyType);
    document.getElementById('userForm').style.display = 'none';
    showCategorizedRecommendations(bodyType);
  }

  function showCategorizedRecommendations(type) {
    document.getElementById('bodyTypeSelection').style.display = 'none';
    document.getElementById('categorySelection').style.display = 'none';
    document.getElementById('recommendations').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';
    let html = `<h2>Recommendations for ${type}</h2>`;
    ['dress', 'top', 'bottom'].forEach(category => {
      html += `<h3>${category.toUpperCase()}</h3>`;
      clothesData.filter(c => c.type === category && (c.bodyType === type || c.bodyType === 'any')).forEach(c => {
        html += `
   <div id="clothes-container" class="image-grid">
    <img src="${c.img}" alt="${c.name}" style="max-width:150px; border-radius:8px;"><br>
    <strong>${c.name}</strong><br>
    <a href="${c.link}" target="_blank">Buy Now</a>
  </div>
   `;
      });
      html += '<hr>';
    });
    document.getElementById('recommendations').innerHTML = html;
    localStorage.setItem('lastView', 'saved');
  }

  function selectBodyTypeAndShowCategory(type) {
    localStorage.setItem('selectedBodyType', type);
    localStorage.setItem('lastView', 'homeFromCategory');
    document.getElementById('bodyTypeSelection').style.display = 'none';
    document.getElementById('categorySelection').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';
  }

  function loadCategory(type) {
    let bodyType = localStorage.getItem('selectedBodyType');
    document.getElementById('categorySelection').style.display = 'none';
    document.getElementById('recommendations').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';

    const filtered = clothesData.filter(c => c.type === type && (!bodyType || c.bodyType === bodyType || c.bodyType === 'any'));
    if (bodyType === null) {
      bodyType = "All";
    }
    let html = `<h2>${type.toUpperCase()} for ${bodyType}</h2>`;
    filtered.forEach(c => {
      html += `
        <div id="clothes-container" class="image-grid">
          <img src="${c.img}" alt="${c.name}" style="max-width:150px; border-radius:8px;"><br>
          <strong>${c.name}</strong><br>
          <a href="${c.link}" target="_blank">Buy Now</a>
        </div>
      `;
    });
    document.getElementById('recommendations').innerHTML = html;
    localStorage.setItem('lastView', 'category');
  }
  
  
  function browseAllClothes() {
    localStorage.removeItem('selectedBodyType');
    localStorage.setItem('lastView', 'homeFromCategory');
    document.getElementById('bodyTypeSelection').style.display = 'none';
    document.getElementById('categorySelection').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';
  }

  function showAllRecommendationsForSavedType() {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user) {
      localStorage.setItem('selectedBodyType', user.bodyType);
    }
    localStorage.setItem('lastView', 'homeFromCategory');
    document.getElementById('bodyTypeSelection').style.display = 'none';
    document.getElementById('categorySelection').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';
  }

  function goBack() {
    const lastView = localStorage.getItem('lastView');

    document.getElementById('recommendations').style.display = 'none';
    document.getElementById('categorySelection').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';

    if (lastView === 'category') {
      document.getElementById('categorySelection').style.display = 'block';
      document.getElementById('backButton').style.display = 'block';
      localStorage.setItem('lastView', 'homeFromCategory');
    } else if (lastView === 'homeFromCategory') {
      document.getElementById('bodyTypeSelection').style.display = 'block';
    } else {
      document.getElementById('bodyTypeSelection').style.display = 'block';
    }
  }

  function resetUser() {
    localStorage.clear();
    location.reload();
  }

  window.onload = initializePage;