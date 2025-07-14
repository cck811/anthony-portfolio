(function() {
    'use strict';
    console.log("reading js");
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~script start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Slider setup~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    document.addEventListener('DOMContentLoaded', function() {
        const slider1 = document.getElementById('slider1');
        const slider2 = document.getElementById('slider2');
        const slider3 = document.getElementById('slider3');
        const slider4 = document.getElementById('slider4');
        const explanationDiv = document.getElementById('explanation');
    
        noUiSlider.create(slider1, {
            start: [1],
            range: {
                'min': [1],
                'max': [3]
            },
            step: 1
        });
    
        noUiSlider.create(slider2, {
            start: [1],
            range: {
                'min': [1],
                'max': [3]
            },
            step: 1
        });
    
        noUiSlider.create(slider3, {
            start: [1],
            range: {
                'min': [1],
                'max': [3]
            },
            step: 1
        });
    
        noUiSlider.create(slider4, {
            start: [1],
            range: {
                'min': [1],
                'max': [3]
            },
            step: 1
        });
    
        const canvas = document.getElementById('feedback-canvas');
        const ctx = canvas.getContext('2d');

        // Increase the resolution of the canvas
        const scaleFactor = 2; // Increase for higher resolution
        canvas.width = 940 * scaleFactor;
        canvas.height = 703 * scaleFactor;
        ctx.scale(scaleFactor, scaleFactor);
        
        function drawImageBasedOnSliders() {
            const taxRate = parseInt(slider1.noUiSlider.get());
            const minWage = parseInt(slider2.noUiSlider.get());
            const socialWelfare = parseInt(slider3.noUiSlider.get());
            const marketForces = parseInt(slider4.noUiSlider.get());
    
            
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
            
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Scenarios with all Sliders Values~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

            let imgSrc = '';
            let explanation = '';
    
            const scenarios = {
                "economic-boom": [
                    [1, 2, 3, 3], [2, 2, 3, 3], [3, 2, 3, 3],
                    [1, 3, 3, 3], [2, 3, 3, 3], [3, 3, 3, 3]
                ],
                "high-disparity": [
                    [1, 1, 1, 3], [1, 2, 1, 3], [1, 3, 1, 3],
                    [1, 1, 3, 3], [2, 1, 1, 3], [2, 1, 2, 3],
                    [2, 2, 1, 3], [1, 1, 2, 3], [2, 1, 3, 3]
                ],
                "balanced-growth": [
                    [2, 2, 2, 2]
                ],
                "economic-struggle": [
                    [1, 1, 1, 1], [1, 1, 2, 1], [2, 1, 1, 1],
                    [2, 1, 1, 2], [2, 1, 2, 1], [2, 1, 2, 2],
                    [2, 1, 3, 1], [2, 1, 3, 2]
                ],
                "sustainable-development": [
                    [2, 2, 3, 2], [3, 2, 3, 2], [2, 3, 3, 2]
                ],
                "high-welfare-society": [
                    [3, 3, 3, 2], [3, 3, 3, 1], [1, 3, 3, 1], [1, 3, 3, 2]
                ],
                "stagnant-economy": [
                    [2, 2, 2, 1], [3, 2, 2, 1], [3, 2, 2, 2]
                ],
                "welfare-dependent-economy": [
                    [3, 1, 3, 1], [3, 2, 3, 1], [1, 1, 3, 1],
                    [2, 2, 3, 1], [1, 1, 3, 2]
                ],
                "market-led-growth": [
                    [1, 2, 2, 3], [2, 2, 2, 3]
                ],
                "tax-burdened-economy": [
                    [3, 1, 2, 1], [3, 2, 1, 1], [3, 2, 1, 2],
                    [3, 2, 1, 3]
                ],
                "fair-wage-economy": [
                    [1, 2, 2, 1], [1, 2, 2, 2], [1, 2, 3, 1],
                    [1, 2, 3, 2], [2, 2, 1, 1], [2, 2, 1, 2]
                ],
                "inflated-wage-economy": [
                    [1, 3, 2, 1], [1, 3, 2, 2], [2, 3, 2, 1],
                    [2, 3, 2, 2], [2, 3, 3, 1], [1, 3, 2, 3],
                    [2, 3, 2, 3]
                ],
                "under-developed-economy": [
                    [1, 2, 1, 1], [1, 2, 1, 2], [1, 3, 1, 1],
                    [1, 3, 1, 2], [1, 1, 1, 2], [1, 1, 2, 2]
                ],
                "low-growth-economy": [
                    [3, 1, 1, 1], [3, 1, 1, 2], [3, 1, 1, 3],
                    [3, 1, 2, 2], [3, 1, 2, 3], [3, 1, 3, 2],
                    [3, 1, 3, 3], [3, 2, 2, 3]
                ],
                "overburdened-economy": [
                    [3, 3, 1, 1], [3, 3, 1, 2], [3, 3, 1, 3],
                    [3, 3, 2, 1], [3, 3, 2, 2], [3, 3, 2, 3],
                    [2, 3, 1, 1], [2, 3, 1, 2], [2, 3, 1, 3]
                ]
            };
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~explaination section~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            const explanations = {
                "economic-boom": [
                    [1, 2, 3, 3, "Economic-Boom: Low taxes boost business investment, fair wages ensure decent living standards, good social welfare supports the needy, and strong market forces drive economic growth."],
                    [2, 2, 3, 3, "Economic-Boom: Moderate taxes balance revenue and investment, fair wages keep consumer spending healthy, good social welfare reduces inequality, and strong market forces sustain growth."],
                    [3, 2, 3, 3, "Economic-Boom: High taxes fund excellent public services, fair wages support the middle class, good social welfare mitigates poverty, and strong market forces drive innovation and productivity."],
                    [1, 3, 3, 3, "Economic-Boom: Low taxes encourage business investment, but over-inflated wages could strain employers; good social welfare and strong market forces maintain economic momentum."],
                    [2, 3, 3, 3, "Economic-Boom: Moderate taxes ensure public funding, over-inflated wages might hurt employment, but good social welfare and strong market forces help sustain economic performance."],
                    [3, 3, 3, 3, "Economic-Boom: High taxes support public goods, over-inflated wages risk unemployment, but strong market forces and good social welfare drive overall economic strength."]
                ],
                "high-disparity": [
                    [1, 1, 1, 3, "High-Disparity: Low taxes favor the wealthy, insufficient wages trap workers in poverty, poor social welfare fails to support the vulnerable, leading to high inequality despite strong markets."],
                    [1, 2, 1, 3, "High-Disparity: Low taxes benefit the rich, fair wages provide some relief but poor social welfare increases disparity, even as strong markets thrive."],
                    [1, 3, 1, 3, "High-Disparity: Low taxes aid the affluent, over-inflated wages might cause job losses, poor social welfare exacerbates inequality, despite robust market forces."],
                    [1, 1, 3, 3, "High-Disparity: Low taxes help the wealthy, inadequate wages cause poverty, good social welfare tries to bridge the gap, but strong markets accentuate disparity."],
                    [2, 1, 1, 3, "High-Disparity: Moderate taxes balance public funds, low wages increase poverty, poor social welfare deepens inequality, despite strong markets."],
                    [2, 1, 2, 3, "High-Disparity: Moderate taxes fund essential services, low wages perpetuate poverty, fair social welfare offers limited support, with strong markets favoring the wealthy."],
                    [2, 2, 1, 3, "High-Disparity: Moderate taxes provide public revenue, fair wages aid workers, poor social welfare leaves many vulnerable, strong markets widen wealth gaps."],
                    [1, 1, 2, 3, "High-Disparity: Low taxes benefit the rich, low wages harm workers, fair social welfare offers some support, strong markets increase inequality."],
                    [2, 1, 3, 3, "High-Disparity: Moderate taxes ensure public services, low wages cause poverty, good social welfare mitigates some disparity, but strong markets still favor the affluent."]
                ],
                "balanced-growth": [
                    [2, 2, 2, 2, "Balanced-Growth: Moderate taxes and fair wages balance growth and equity, fair social welfare supports the middle class, and moderate market forces ensure steady progress."]
                ],
                "economic-struggle": [
                    [1, 1, 1, 1, "Economic-Struggle: Low taxes limit public funds, low wages cause poverty, poor social welfare fails to support the needy, weak markets stifle growth."],
                    [1, 1, 2, 1, "Economic-Struggle: Low taxes restrict public services, low wages increase poverty, fair social welfare offers limited aid, weak markets hinder development."],
                    [2, 1, 1, 1, "Economic-Struggle: Moderate taxes provide some public funding, low wages perpetuate poverty, poor social welfare leaves many without support, weak markets stall progress."],
                    [2, 1, 1, 2, "Moderate taxes ensure some services, low wages keep workers in poverty, poor social welfare exacerbates hardship, moderate markets offer limited growth."],
                    [2, 1, 2, 1, "Moderate taxes fund essential services, low wages increase poverty, fair social welfare gives minimal support, weak markets restrict opportunities."],
                    [2, 1, 2, 2, "Moderate taxes balance public funding, low wages cause poverty, fair social welfare provides some aid, moderate markets sustain slow growth."],
                    [2, 1, 3, 1, "Moderate taxes support public goods, low wages cause poverty, good social welfare mitigates some issues, weak markets limit overall growth."],
                    [2, 1, 3, 2, "Moderate taxes ensure public services, low wages trap workers in poverty, good social welfare offers relief, moderate markets support limited progress."]
                ],
                "sustainable-development": [
                    [2, 2, 3, 2, "Sustainable-Development: Moderate taxes and fair wages balance equity, good social welfare ensures support, and moderate markets sustain steady, sustainable growth."],
                    [3, 2, 3, 2, "Sustainable-Development: High taxes fund robust public services, fair wages support workers, good social welfare reduces poverty, moderate markets maintain sustainable development."],
                    [2, 3, 3, 2, "Sustainable-Development: Moderate taxes balance revenue, over-inflated wages might hurt some businesses, good social welfare provides support, moderate markets sustain overall stability."]
                ],
                "high-welfare-society": [
                    [3, 3, 3, 2, "High-Welfare-Society: High taxes ensure excellent public services, over-inflated wages risk employment, but good social welfare and moderate markets maintain a high quality of life."],
                    [3, 3, 3, 1, "High-Welfare-Society: High taxes support strong social welfare, over-inflated wages hurt employment, weak markets hinder growth but welfare ensures a safety net."],
                    [1, 3, 3, 1, "High-Welfare-Society: Low taxes encourage investment, over-inflated wages risk unemployment, good social welfare supports the vulnerable, weak markets limit growth."],
                    [1, 3, 3, 2, "High-Welfare-Society: Low taxes favor investment, over-inflated wages could hurt jobs, good social welfare provides support, moderate markets ensure some stability."]
                ],
                "stagnant-economy": [
                    [2, 2, 2, 1, "Stagnant-Economy: Moderate taxes provide balanced public funding, fair wages help workers, fair social welfare supports the needy, but weak markets limit growth."],
                    [3, 2, 2, 1, "Stagnant-Economy: High taxes fund public services, fair wages support workers, fair social welfare aids those in need, but weak markets stifle economic activity."],
                    [3, 2, 2, 2, "Stagnant-Economy: High taxes ensure public funding, fair wages help workers, fair social welfare supports the vulnerable, moderate markets offer limited growth."]
                ],
                "welfare-dependent-economy": [
                    [3, 1, 3, 1, "Welfare-Dependent-Economy: High taxes fund robust social welfare, low wages cause poverty, weak markets limit job opportunities, reliance on welfare increases."],
                    [3, 2, 3, 1, "Welfare-Dependent-Economy: High taxes support excellent social services, fair wages aid workers, weak markets restrict growth, increasing welfare dependence."],
                    [1, 1, 3, 1, "Welfare-Dependent-Economy: Low taxes favor the wealthy, low wages trap workers in poverty, good social welfare tries to compensate, weak markets limit opportunities."],
                    [2, 2, 3, 1, "Welfare-Dependent-Economy: Moderate taxes ensure public services, fair wages support workers, good social welfare aids the needy, weak markets stifle growth."],
                    [1, 1, 3, 2, "Welfare-Dependent-Economy: Low taxes benefit the rich, low wages perpetuate poverty, good social welfare offers support, moderate markets sustain limited opportunities."]
                ],
                "market-led-growth": [
                    [1, 2, 2, 3, "Market-Led-Growth: Low taxes encourage investment, fair wages support consumer spending, fair social welfare reduces inequality, strong markets drive growth."],
                    [2, 2, 2, 3, "Market-Led-Growth: Moderate taxes balance public funds and investment, fair wages help workers, fair social welfare supports the vulnerable, strong markets sustain growth."]
                ],
                "tax-burdened-economy": [
                    [3, 1, 2, 1, "Tax-Burdened-Economy: High taxes strain businesses, low wages cause poverty, fair social welfare provides limited support, weak markets hinder growth."],
                    [3, 2, 1, 1, "Tax-Burdened-Economy: High taxes limit business investment, fair wages help workers, poor social welfare fails to support the needy, weak markets stifle activity."],
                    [3, 2, 1, 2, "Tax-Burdened-Economy: High taxes fund public services, fair wages support workers, poor social welfare leaves many vulnerable, moderate markets sustain limited growth."],
                    [3, 2, 1, 3, "Tax-Burdened-Economy: High taxes ensure public funding, fair wages help workers, poor social welfare exacerbates inequality, strong markets drive limited economic progress."]
                ],
                "fair-wage-economy": [
                    [1, 2, 2, 1, "Fair-Wage-Economy: Low taxes encourage investment, fair wages support workers, fair social welfare aids the needy, but weak markets limit growth."],
                    [1, 2, 2, 2, "Fair-Wage-Economy: Low taxes favor investment, fair wages support consumer spending, fair social welfare reduces inequality, moderate markets sustain progress."],
                    [1, 2, 3, 1, "Fair-Wage-Economy: Low taxes help businesses, fair wages support workers, good social welfare aids the vulnerable, but weak markets limit opportunities."],
                    [1, 2, 3, 2, "Fair-Wage-Economy: Low taxes boost investment, fair wages support spending, good social welfare reduces poverty, moderate markets sustain growth."],
                    [2, 2, 1, 1, "Fair-Wage-Economy: Moderate taxes balance public funding, fair wages support workers, poor social welfare leaves many without support, weak markets hinder development."],
                    [2, 2, 1, 2, "Fair-Wage-Economy: Moderate taxes ensure public services, fair wages help workers, poor social welfare increases disparity, moderate markets sustain limited progress."]
                ],
                "inflated-wage-economy": [
                    [1, 3, 2, 1, "Inflated-Wage-Economy: Low taxes encourage investment, over-inflated wages risk unemployment, fair social welfare supports some, weak markets hinder growth."],
                    [1, 3, 2, 2, "Inflated-Wage-Economy: Low taxes favor investment, over-inflated wages strain businesses, fair social welfare aids the needy, moderate markets support some growth."],
                    [2, 3, 2, 1, "Inflated-Wage-Economy: Moderate taxes balance public funding, over-inflated wages risk job losses, fair social welfare provides limited support, weak markets hinder development."],
                    [2, 3, 2, 2, "Inflated-Wage-Economy: Moderate taxes ensure public services, over-inflated wages hurt businesses, fair social welfare aids some, moderate markets sustain limited growth."],
                    [2, 3, 3, 1, "Inflated-Wage-Economy: Moderate taxes fund services, over-inflated wages risk employment, good social welfare supports the vulnerable, weak markets limit opportunities."],
                    [1, 3, 2, 3, "Inflated-Wage-Economy: Low taxes encourage investment, over-inflated wages might cause job losses, fair social welfare supports some, strong markets drive growth."],
                    [2, 3, 2, 3, "Inflated-Wage-Economy: Moderate taxes balance public funding, over-inflated wages risk unemployment, fair social welfare aids the needy, strong markets sustain progress."]
                ],
                "under-developed-economy": [
                    [1, 2, 1, 1, "Under-Developed-Economy: Low taxes benefit the wealthy, fair wages help workers, poor social welfare increases disparity, weak markets stifle growth."],
                    [1, 2, 1, 2, "Under-Developed-Economy: Low taxes favor investment, fair wages support spending, poor social welfare leaves many vulnerable, moderate markets sustain limited development."],
                    [1, 3, 1, 1, "Under-Developed-Economy: Low taxes encourage investment, over-inflated wages risk unemployment, poor social welfare fails to support the needy, weak markets limit growth."],
                    [1, 3, 1, 2, "Under-Developed-Economy: Low taxes boost investment, over-inflated wages hurt businesses, poor social welfare exacerbates poverty, moderate markets offer limited progress."],
                    [1, 1, 1, 2, "Under-Developed-Economy: Low taxes benefit the rich, low wages increase poverty, poor social welfare fails to aid the vulnerable, moderate markets sustain limited development."],
                    [1, 1, 2, 2, "Under-Developed-Economy: Low taxes favor the wealthy, low wages trap workers in poverty, fair social welfare offers minimal support, moderate markets sustain limited opportunities."]
                ],
                "low-growth-economy": [
                    [3, 1, 1, 1, "Low-Growth-Economy: High taxes strain businesses, low wages cause poverty, poor social welfare fails to support the needy, weak markets stifle growth."],
                    [3, 1, 1, 2, "Low-Growth-Economy: High taxes limit business investment, low wages perpetuate poverty, poor social welfare leaves many without support, moderate markets offer limited growth."],
                    [3, 1, 1, 3, "Low-Growth-Economy: High taxes ensure public funding, low wages cause poverty, poor social welfare increases disparity, strong markets drive limited economic progress."],
                    [3, 1, 2, 2, "Low-Growth-Economy: High taxes fund public services, low wages trap workers in poverty, fair social welfare provides minimal support, moderate markets sustain limited growth."],
                    [3, 1, 2, 3, "Low-Growth-Economy: High taxes support public services, low wages increase poverty, fair social welfare offers limited aid, strong markets sustain limited progress."],
                    [3, 1, 3, 2, "Low-Growth-Economy: High taxes ensure public funding, low wages perpetuate poverty, good social welfare mitigates some disparity, moderate markets sustain limited growth."],
                    [3, 1, 3, 3, "Low-Growth-Economy: High taxes fund public goods, low wages trap workers in poverty, good social welfare provides relief, strong markets sustain limited progress."],
                    [3, 2, 2, 3, "Low-Growth-Economy: High taxes ensure public funding, fair wages support workers, fair social welfare aids the needy, strong markets drive growth."]
                ],
                "overburdened-economy": [
                    [3, 3, 1, 1, "Overburdened-Economy: High taxes limit business growth, over-inflated wages risk unemployment, poor social welfare leaves many without support, weak markets hinder development."],
                    [3, 3, 1, 2, "Overburdened-Economy: High taxes strain businesses, over-inflated wages hurt employment, poor social welfare exacerbates poverty, moderate markets offer limited growth."],
                    [3, 3, 1, 3, "Overburdened-Economy: High taxes limit business investment, over-inflated wages risk job losses, poor social welfare fails to support the needy, strong markets drive limited progress."],
                    [3, 3, 2, 1, "Overburdened-Economy: High taxes strain businesses, over-inflated wages risk unemployment, fair social welfare provides limited aid, weak markets hinder growth."],
                    [3, 3, 2, 2, "Overburdened-Economy: High taxes ensure public services, over-inflated wages hurt businesses, fair social welfare aids some, moderate markets sustain limited growth."],
                    [3, 3, 2, 3, "Overburdened-Economy: High taxes support public services, over-inflated wages risk unemployment, fair social welfare offers minimal aid, strong markets drive growth."],
                    [2, 3, 1, 1, "Overburdened-Economy: Moderate taxes provide some public funding, over-inflated wages hurt employment, poor social welfare fails to support the needy, weak markets stifle growth."],
                    [2, 3, 1, 2, "Overburdened-Economy: Moderate taxes ensure public services, over-inflated wages risk job losses, poor social welfare increases disparity, moderate markets offer limited growth."],
                    [2, 3, 1, 3, "Overburdened-Economy: Moderate taxes balance public funding, over-inflated wages hurt businesses, poor social welfare leaves many without support, strong markets sustain limited growth."]
                ]
            };
    
            // Find the matching scenario and explanation
            for (const [scenario, conditions] of Object.entries(scenarios)) {
                for (const condition of conditions) {
                    if (taxRate === condition[0] && minWage === condition[1] && socialWelfare === condition[2] && marketForces === condition[3]) {
                        imgSrc = `../images/${scenario}.svg`;
                        break;
                    }
                }
                if (imgSrc) break;
            }
    
            for (const [scenario, conditions] of Object.entries(explanations)) {
                for (const condition of conditions) {
                    if (taxRate === condition[0] && minWage === condition[1] && socialWelfare === condition[2] && marketForces === condition[3]) {
                        explanation = condition[4];
                        break;
                    }
                }
                if (explanation) break;
            }
    
            const img = new Image();
            img.src = imgSrc;
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width / scaleFactor, canvas.height / scaleFactor);
            };
    
            explanationDiv.textContent = explanation;
        }
    
        slider1.noUiSlider.on('update', drawImageBasedOnSliders);
        slider2.noUiSlider.on('update', drawImageBasedOnSliders);
        slider3.noUiSlider.on('update', drawImageBasedOnSliders);
        slider4.noUiSlider.on('update', drawImageBasedOnSliders);
    
        
    });
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Function to show instruction overlay~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    document.addEventListener('DOMContentLoaded', (event) => { // Event listener upon entering site
        const instructionsOverlay = document.getElementById('instructions-overlay'); // Element of the instruction overlay
        const showInstructionsBtn = document.getElementById('show-instructions'); // Element of ? button
        const closeInstructionsBtn = document.getElementById('close-instructions'); // Element of Close button
    
        // Show the overlay when the page loads
        instructionsOverlay.style.display = 'block';
    
        // Hide overlay when "Close" is clicked
        closeInstructionsBtn.addEventListener('click', function() { 
            instructionsOverlay.style.display = 'none';
        });
    
        // Toggle overlay visibility when ? button is clicked
        showInstructionsBtn.addEventListener('click', function() {
            if (instructionsOverlay.style.display === 'none') {
                instructionsOverlay.style.display = 'block';
            } else {
                instructionsOverlay.style.display = 'none';
            }
        });
    });
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Comment Section~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    document.addEventListener('DOMContentLoaded', (event) => {
        const commentPopupOverlay = document.getElementById('comment-popup-overlay');
        const commentButton = document.getElementById('comment-btn');
        const closePopupButton = document.getElementById('close-popup');
    
        // Show the popup when the "Comment" button is clicked
        commentButton.addEventListener('click', function() {
            commentPopupOverlay.style.display = 'flex';
        });
    
        // Hide the popup when the "Close" button is clicked
        closePopupButton.addEventListener('click', function() {
            commentPopupOverlay.style.display = 'none';
        });
    

    });
    
    
    // Initialize
    Parse.initialize("OIRMnHSubP72gcTqiOWWksDMceFEx75Gx1oxx9YF", "yVLvstuECWXTgC8Z4k2Ohzn92RZT2HK7mJUjJhF4");
    Parse.serverURL = 'https://parseapi.back4app.com/';

    // Fetch and display comment
    async function fetchComments() {
        const commentsQuery = new Parse.Query('Comments');
        commentsQuery.descending('time');
        const results = await commentsQuery.find();
        const commentsDiv = document.getElementById('comments');
        commentsDiv.innerHTML = '';
        results.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <h4>${comment.get('username')}</h4>
                <p>${comment.get('comment')}</p>
            `;
            commentsDiv.appendChild(commentElement);
        });
    }

    // Submit new comment
    async function submitComment(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;
        const Comment = Parse.Object.extend('Comments');
        const newComment = new Comment();
        newComment.set('username', username);
        newComment.set('comment', comment);
        await newComment.save();
        document.getElementById('comment-form').reset();
        fetchComments();
    }

    document.getElementById('comment-form').addEventListener('submit', submitComment);

    // Get comments on page load
    fetchComments();

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Facts Section~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
document.addEventListener('DOMContentLoaded', (event) => {
    const factsContent = [
        `
        <h3>General Discussion</h3>
        <h4>Factors Influencing Wealth Disparity:</h4>
        <ul>
            <li><strong>Tax Rate:</strong> High tax rates on corporate income and individuals can lead to tax avoidance strategies.</li>
            <li><strong>Minimum Wage:</strong> Insufficient minimum wages contribute to economic instability and exacerbate poverty.</li>
            <li><strong>Social Wage:</strong> Benefits provided by the state, such as healthcare, education, and housing subsidies, play a crucial role in reducing inequality.</li>
            <li><strong>Market Forces:</strong> Economic policies, market dynamics, and global economic trends significantly impact wealth distribution.</li>
        </ul>
        <h4>Additional Factors:</h4>
        <ul>
            <li><strong>Education:</strong> Access to quality education can significantly impact economic mobility. Countries with better education systems tend to have lower levels of income inequality.</li>
            <li><strong>Technological Advancements:</strong> Technology can both bridge and widen the wealth gap. While it can create opportunities for economic growth, it can also lead to job displacement and increased income inequality.</li>
            <li><strong>Globalization:</strong> Global economic policies and trade agreements can influence national wealth distribution. Globalization can lead to economic growth but may also exacerbate inequalities within and between countries.</li>
            <li><strong>Political Stability:</strong> Stable political environments tend to attract investment and foster economic growth, while political instability can lead to economic uncertainty and increased inequality.</li>
        </ul>
        `,
        `
        <h3>Low Wealth Disparity Country</h3>
        <h3>Sweden</h3>
        <p>
            Sweden's approach to wealth redistribution is effective, benefiting society by supporting public services and welfare programs, particularly aiding low-income groups.
        </p>
        <h4>Factors Contributing to Wealth Disparity:</h4>
        <ul>
            <li><strong>Tax System:</strong> Sweden’s tax system redistributes wealth effectively, supporting public services and welfare programs.</li>
            <li><strong>Sector-Specific Wage Standards:</strong> Collective agreements set sector-specific wage standards that often surpass statutory minimum wages elsewhere, protecting workers from low living standards.</li>
            <li><strong>Market Forces:</strong> Sweden’s stable and innovative economy fosters economic growth and narrows the wealth disparity gap.</li>
            <li><strong>Equal Opportunities:</strong> Focus on equal opportunities in education and employment promotes social mobility, allowing individuals from lower-income backgrounds to improve their economic status.</li>
        </ul>
        <p><strong>Key Data Source:</strong> <a href="https://www.pewresearch.org/social-trends/2020/01/09/trends-in-income-and-wealth-inequality/">Trends in Income and Wealth Inequality (Pew Research)</a></p>
        `,
        `
        <h3>High Wealth Disparity Country</h3>
        <h3>Nigeria</h3>
        <p>
            Nigeria, the largest economy in Africa, faces significant wealth disparity driven by a range of interrelated factors. Economic stability varies greatly between classes, with extreme poverty on one side and immense wealth on the other. Notably, five billionaires in Nigeria hold a collective wealth of $29.9 billion. If a government agency earned this amount annually, it could potentially lift two million people out of poverty each year.
        </p>
        <h4>Factors Contributing to Wealth Disparity:</h4>
        <ul>
            <li><strong>Gender Inequality:</strong> Women, who constitute 60-79% of the rural labor force, are five times less likely to receive a decent education, exacerbating economic instability.</li>
            <li><strong>Tax Avoidance:</strong> High Corporate Income Tax (CIT) rates for large companies encourage sophisticated tax avoidance strategies, allowing owners to retain a larger share of profits.</li>
            <li><strong>Corruption and Mismanagement:</strong> Inefficient use of tax revenues leads to low investment in social services, which disproportionately affects the poor.</li>
            <li><strong>Inflation:</strong> The minimum wage, last increased in 2019 to NGN 30,000, has been devalued by 276% due to inflation, which has reached a high of 40.1%.</li>
        </ul>
        <p><strong>Key Data Sources:</strong></p>
        <ul>
            <li><a href="https://www.researchgate.net/publication/368731217_Taxes_and_Income_Inequality_in_Nigeria_1980_-_2020">Taxes and Income Inequality in Nigeria (1980-2020)</a></li>
            <li><a href="https://ijrp.org/filePermission/fileDownload">The Effects of Nigeria Minimum Wage on Nigeria's Economy</a></li>
        </ul>
        `,
        `
        <h3>High Wealth Disparity Country</h3>
        <h3>Middle East (Gulf Countries)</h3>
        <p>
            The Middle East’s Gulf countries, including Kuwait, Oman, Bahrain, Saudi Arabia, and Qatar, experience significant economic disparities due to market forces and oil wealth distribution.
        </p>
        <h4>Factors Contributing to Wealth Disparity:</h4>
        <ul>
            <li><strong>Oil Endowment:</strong> Oil revenue distribution creates significant economic inequality, benefiting a small elite while low-paid foreign workers face challenging conditions.</li>
            <li><strong>Income Concentration:</strong> The top 10% of earners make 29 times more than the bottom 50%.</li>
            <li><strong>Population Growth:</strong> An 80% increase in population from 1990 to 2021 has not matched the slow pace of average income growth, further concentrating wealth among top earners.</li>
            <li><strong>Social Wage Benefits:</strong> Funded by oil revenues, these benefits are provided to national citizens but are limited for foreign workers, who make up a significant portion of the labor force.</li>
        </ul>
        <p><strong>Key Data Source:</strong> <a href="https://wid.world/document/income-inequality-in-the-middle-east-world-inequality-lab-issue-brief-2022-06/">Income Inequality in the Middle East (World Inequality Lab Issue Brief 2022-06)</a></p>
        `,
        `
        <h3>High Wealth Disparity Country</h3>
        <h3>United States</h3>
        <p>
            Wealth disparities in the U.S. highlight a robust economy but flawed tax policies and market forces.
        </p>
        <h4>Factors Contributing to Wealth Disparity:</h4>
        <ul>
            <li><strong>Tax System Loopholes:</strong> The progressive tax system is undermined by loopholes exploited by high-income individuals, exacerbating income inequality.</li>
            <li><strong>Tax Cuts and Jobs Act of 2017:</strong> Reduced corporate tax rates and provided substantial tax cuts for high-income individuals, contributing to a wider wealth gap.</li>
            <li><strong>Middle-Income Household Decline:</strong> The share of American adults living in middle-income households decreased from 61% in 1971 to 51% in 2019.</li>
            <li><strong>Great Recession Impact:</strong> High-income families rebounded quickly through financial market investments, while middle and low-income families faced prolonged setbacks due to dependence on home equity.</li>
            <li><strong>Stagnant Median Net Worth:</strong> The median net worth of American families in 2016 remained below its 2007 peak, particularly among middle and lower-income families.</li>
        </ul>
        <p><strong>Key Data Source:</strong> <a href="https://www.pewresearch.org/social-trends/2020/01/09/trends-in-income-and-wealth-inequality/">Trends in Income and Wealth Inequality (Pew Research)</a></p>
        `
    ];

    let currentFactIndex = 0;

    const factsSection = document.getElementById('facts-content');
    const previousBtn = document.getElementById('previous-btn');
    const nextBtn = document.getElementById('next-btn');

    const expandBtn = document.getElementById('expand-btn');
    const factsSectionDiv = document.getElementById('facts-section');

    function updateFactsContent(index) {
        factsSection.innerHTML = factsContent[index];
    }

    previousBtn.addEventListener('click', () => {
        if (currentFactIndex > 0) {
            currentFactIndex--;
            updateFactsContent(currentFactIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentFactIndex < factsContent.length - 1) {
            currentFactIndex++;
            updateFactsContent(currentFactIndex);
        }
    });
    
    expandBtn.addEventListener('click', () => {
        if (factsSectionDiv.classList.contains('expanded')) {
            factsSectionDiv.classList.remove('expanded');
            expandBtn.textContent = '▼';
        } else {
            factsSectionDiv.classList.add('expanded');
            expandBtn.textContent = '▲';
        }
    });
    // Initialize with the first fact
    updateFactsContent(currentFactIndex);
});

})();
